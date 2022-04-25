import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, OnDestroy {
  
  listObservers$: Array<Subscription> = [];
  status: string = 'paused';

  constructor(public audioService: AudioService) { }

  ngOnInit(): void {

    const observer$ = this.audioService.playerStatus$.subscribe({
      next: status => this.status = status
    });

    this.listObservers$ = [observer$];
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe());
  }

  handlePosition(evt: any): void {
    this.audioService.seekAudio(evt.value);
  }

  previous() {
    this.audioService.previous();
  }

  next() {
    this.audioService.next();
  }
}
