import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../home/home.module').then(m => m.HomeModule),
        pathMatch: 'full'
      },
      {
        path: 'artist/:id',
        loadChildren: () => import('../artist/artist.module').then(m => m.ArtistModule)
      },
      {
        path: 'album/:id',
        loadChildren: () => import('../album/album.module').then(m => m.AlbumModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
