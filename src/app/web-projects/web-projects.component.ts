import { Component, OnInit, HostListener } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-web-projects',
  templateUrl: './web-projects.component.html',
  styleUrls: ['./web-projects.component.scss']
})
export class WebProjectsComponent implements OnInit {

  constructor(private imageService: ImageService) {}

  async ngOnInit() {
    this.imageService.imgList = await this.imageService.getImage(5).toPromise();
  }
  async onScrollDown() {
    console.log('1 - ' + this.imageService.imgList.length);
    const img = await this.imageService.getImage(this.imageService.imgList.length + 5).toPromise();
    for (const item of img) {
      this.imageService.imgList.push(item);
    }
  }

}
