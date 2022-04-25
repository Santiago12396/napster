import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Track } from 'src/app/core/models/track.model';


@Injectable({
  providedIn: 'root'
})
export class AudioService implements OnInit {
  
  public audio!: HTMLAudioElement;
  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);
  public timeElapsed$: BehaviorSubject<any> = new BehaviorSubject('00:00');
  public timeRemaining$: BehaviorSubject<any> = new BehaviorSubject('-00:00');
  public playerStatus$: BehaviorSubject<string> = new BehaviorSubject('paused');
  public playerPercentage$: BehaviorSubject<number> = new BehaviorSubject(0);
  public tracks$: BehaviorSubject<Track[]> = new BehaviorSubject([] as Track[]);

  tracks: Track[] = [];
  indexCurrent: number = 0;

  constructor() {
    this.audio = new Audio();
    this.listenAllEvents();
  }
  
  
  ngOnInit(): void {
  }

  setAudio(track: Track) {
    if(track) {
      this.audio.src = track.previewURL;
  
      const playPromise = this.audio.play()!;
      if (playPromise !== undefined) {
        playPromise.then()
        .catch(err => {
          console.log(err);
        });
      }
    }
  }

  listenAllEvents() {
    this.audio.addEventListener('timeupdate', this.calculateTime);
    this.audio.addEventListener('playing', this.setPlayerStatus);
    this.audio.addEventListener('play', this.setPlayerStatus);
    this.audio.addEventListener('pause', this.setPlayerStatus);
    this.audio.addEventListener('ended', this.setPlayerStatus);

  }

  private setPlayerStatus = (state: any) => {
    switch (state.type) { 
      case 'play':
        this.playerStatus$.next('play');
        break;
      case 'playing':
        this.playerStatus$.next('playing');
        break;
      case 'ended':
        this.playerStatus$.next('ended');
        break;
      default:
        this.playerStatus$.next('paused');
        break;
    }

  }

  public togglePlayer(): void {
    this.audio.paused ? this.audio.play() : this.audio.pause();
  }

  private calculateTime = () => {
    const { duration, currentTime } = this.audio;
    this.setTimeElapsed(currentTime);
    this.setTimeRemaining(currentTime, duration);
    this.setPercentage(currentTime, duration);
  }

  private setPercentage(currentTime: number, duration: number): void {
    const percentage = (currentTime * 100) / duration;
    this.playerPercentage$.next(percentage);
  }

  public seekAudio(percentage: number): void {
      const { duration } = this.audio
      const percentagetoSecond = (percentage * duration) / 100;
      this.audio.currentTime = percentagetoSecond;
    }

  private setTimeElapsed(currentTime: number) {
    let seconds = Math.floor(currentTime % 60);
    let minutes = Math.floor((currentTime / 60) % 60);

    const displaySeconds = seconds < 10 ? `0${seconds}`: seconds;
    const displayMinutes = minutes < 10 ? `0${minutes}`: minutes;

    const displayFormat = `${displayMinutes}:${displaySeconds}`;

    this.timeElapsed$.next(displayFormat);

  }

  private setTimeRemaining(currentTime: number, duration: number) {

    let timeLeft = duration - currentTime;
  
    let seconds = Math.floor(timeLeft % 60);
    let minutes = Math.floor((timeLeft / 60) % 60);

    const displaySeconds = seconds < 10 ? `0${seconds}`: seconds;
    const displayMinutes = minutes < 10 ? `0${minutes}`: minutes;

    const displayFormat = `-${displayMinutes}:${displaySeconds}`;

    this.timeRemaining$.next(displayFormat);

    if(currentTime === duration) {
      if(this.indexCurrent === (this.tracks.length - 1)) {
        this.audio.pause();
        return;
      }
      this.setAudio(this.tracks[++this.indexCurrent]);
    }

  }

  
  public previous() {
    this.indexCurrent--;
    if(this.indexCurrent <= 0) {
      this.setAudio(this.tracks[0]);
      this.indexCurrent = 0;
      return;
    } 
      
    this.setAudio(this.tracks[this.indexCurrent]);
  }

  public next() {
    this.indexCurrent++;
    if(this.indexCurrent >= (this.tracks.length - 1)) {
      this.setAudio(this.tracks[this.tracks.length - 1]);
      this.indexCurrent = this.tracks.length - 1;
      return;
    } 
    this.setAudio(this.tracks[this.indexCurrent]);
  }

  setIndex(currentTrack: any, tracks: Track[]) { 
    if(currentTrack) {
      this.tracks = tracks;
      this.indexCurrent = tracks.findIndex(trackData => trackData.id === currentTrack.id);
      this.setAudio(currentTrack);
    }
  }

}