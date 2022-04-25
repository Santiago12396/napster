import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Album } from 'src/app/core/models/album.model';
import { NapsterService } from '../../services/napster.service';

import SwiperCore, { Pagination, Navigation, SwiperOptions } from "swiper";
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-napster-albums',
  templateUrl: './napster-albums.component.html',
  styleUrls: ['./napster-albums.component.scss']
})
export class NapsterAlbumsComponent implements OnChanges {

  @Input() endpoint: string | undefined;
  
  public albums: Album[] = []; 

  configSwiper: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    scrollbar: { draggable: true }  
  };

  constructor(private napsterService: NapsterService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.endpoint) {
      this.napsterService.getAlbumByUrl(this.endpoint)
          .subscribe(albums => this.albums = albums)
    }
  }
}
