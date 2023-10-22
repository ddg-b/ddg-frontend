import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-form-update-tags',
  templateUrl: './form-update-tags.component.html',
})
export class FormUpdateTagsComponent {
  public tags: string = '';
  tagsHaveChanged = false;
  isSuccess = false;
  isFail = false;
  @Input() tagsArray: { tag: string }[] = [];
  @Input() gifId: number = 0;
  @Output() formSubmitted = new EventEmitter<{ tag: string }[]>();
  ngOnInit() {
    this.tags = this.tagsArray.map(tag => tag.tag).join(',');
  }

  isFormVisible = false;

  toggleFormVisibility() {
    this.isFormVisible = !this.isFormVisible;
    this.tagsHaveChanged = false;
  }
  clearStatus() {
    this.tagsHaveChanged = false;
  }

  constructor(private apiService: ApiService) {}

  onSubmit() {
    this.toggleFormVisibility();
    let tmpNewTags = this.tags.split(',');
    let newTags :{ tag: string }[] = [];
    tmpNewTags.forEach(function(item) {
      const regex = /<[^>]*>/;
      if (!regex.test(item)) {
        const obj = {'tag':item};
        newTags.push(obj);
      }
    });
    this.formSubmitted.emit(newTags);
    const tags_to_send = newTags.map(tag => tag.tag).join(',');
    this.apiService.UpdateTags(this.gifId, tags_to_send).subscribe(
      (response) => {
        this.tagsHaveChanged = true;
        this.isSuccess = true;
        //console.log(response);
      },
      (error) => {
        this.tagsHaveChanged = true;
        this.isFail = true;
        //console.error('Error:', error);
      }
    );
  }
}
