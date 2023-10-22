import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTagsTableComponent } from './display-tags-table.component';

describe('DisplayTagsTableComponent', () => {
  let component: DisplayTagsTableComponent;
  let fixture: ComponentFixture<DisplayTagsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayTagsTableComponent]
    });
    fixture = TestBed.createComponent(DisplayTagsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
