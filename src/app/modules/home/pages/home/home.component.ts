import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/core/models/artist.model';
import { NapsterService } from 'src/app/shared/services/napster.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public artists: Artist[] = [];

  constructor(private napsterService: NapsterService) { }

  ngOnInit(): void {
    this.napsterService.getTopArtists().subscribe({
      next: artists => this.artists = artists
    });
  }

}
