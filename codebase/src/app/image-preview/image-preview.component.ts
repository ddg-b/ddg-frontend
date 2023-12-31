import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.css']
})
export class ImagePreviewComponent {
  @Input() imageSource: string = '';
  @Input() imageTarget: string = '';
  @Input() tagsArray: Array<any> = [];
  tags: string = '';
  showImage: boolean = false;

  ngOnInit() {
    this.tags = this.tagsArray.map(tag => tag.tag).join(',');
  }
  onMouseEnter() {
    this.showImage = true;
  }

  onMouseLeave() {
    this.showImage = false;
  }
}
