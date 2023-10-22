import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpdateTagsComponent } from './form-update-tags.component';

describe('FormUpdateTagsComponent', () => {
  let component: FormUpdateTagsComponent;
  let fixture: ComponentFixture<FormUpdateTagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormUpdateTagsComponent]
    });
    fixture = TestBed.createComponent(FormUpdateTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
