import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGifsByTagComponent } from './display-gifs-by-tag.component';

describe('DisplayGifsByTagComponent', () => {
  let component: DisplayGifsByTagComponent;
  let fixture: ComponentFixture<DisplayGifsByTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayGifsByTagComponent]
    });
    fixture = TestBed.createComponent(DisplayGifsByTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
