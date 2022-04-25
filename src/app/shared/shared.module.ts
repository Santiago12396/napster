import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperModule } from 'swiper/angular';

import { HeaderComponent } from './pages/header/header.component';
import { NapsterImgComponent } from './components/napster-img/napster-img.component';
import { NapsterAlbumsComponent } from './components/napster-albums/napster-albums.component';
import { PlayerComponent } from './pages/player/player.component';
import { MaterialModule } from './components/material/material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    NapsterImgComponent,
    NapsterAlbumsComponent,
    PlayerComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    NapsterImgComponent,
    NapsterAlbumsComponent,
    PlayerComponent
  ]
})
export class SharedModule { }
