import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from 'src/app/core/models/img.model';
import { NapsterService } from '../../services/napster.service';

@Component({
  selector: 'app-napster-img',
  templateUrl: './napster-img.component.html',
  styleUrls: ['./napster-img.component.scss']
})
export class NapsterImgComponent implements OnInit, OnChanges {

  @Input() endpoint: string | undefined;
  
  public images: Image[] = []; 

  constructor(private napsterService: NapsterService,
              private router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.endpoint) {
      this.napsterService.getImgByUrl(this.endpoint)
          .subscribe(images => this.images = images)
    }
  }

  ngOnInit(): void { }

  navigateToInfo(id: string) {

    const type = id.split('.')[0] || '';

    switch(type) {
      case 'art':
        this.router.navigate(['/artist', id]);
        break;
      case 'alb':
        this.router.navigate(['/album', id]);
        break;
    }
  }

}
