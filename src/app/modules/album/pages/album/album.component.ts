import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, of, pipe, take } from 'rxjs';
import { Album } from 'src/app/core/models/album.model';
import { Track } from 'src/app/core/models/track.model';
import { AudioService } from 'src/app/shared/services/audio.service';
import { NapsterService } from 'src/app/shared/services/napster.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  public tracks: Track[] = [];
  public album!: Album;

  public displayedColumns: string[] = ['position', 'name', 'play'];

  constructor(private napsterService: NapsterService,
              private route: ActivatedRoute,
              private audioService: AudioService) { }

  ngOnInit(): void {

      this.route.paramMap.subscribe(params => {
      
        const id = params.get('id') || null;
  
        if(id) {
          combineLatest([ 
              this.napsterService.getAlbumById(id),
              this.napsterService.getTracksByAlbumId(id)
          ]).subscribe({
            next: ([album, tracks]) => {
              this.album = album[0];
              this.tracks = tracks;

              this.audioService.tracks$.next([...tracks]);
              }
            });
        }
  
    });
  }

  sendInfo(element: any) {
    this.audioService.tracks$.pipe(take(1)).subscribe({
      next: tracks => {
        this.audioService.setIndex(element, tracks);
      } 
    });
  }

}
