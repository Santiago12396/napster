import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from 'src/app/core/models/artist.model';
import { NapsterService } from 'src/app/shared/services/napster.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  public artist!: Artist;

  constructor(private napsterService: NapsterService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      
      const id = params.get('id') || null;

      if(id) {
          this.napsterService.getArtistById(id)
              .subscribe({
                next: data => this.artist = data[0]
              });
        }

      })
      
  }
}
