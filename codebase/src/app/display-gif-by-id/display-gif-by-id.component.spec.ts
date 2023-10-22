import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGifByIdComponent } from './display-gif-by-id.component';

describe('DisplayGifByIdComponent', () => {
  let component: DisplayGifByIdComponent;
  let fixture: ComponentFixture<DisplayGifByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayGifByIdComponent]
    });
    fixture = TestBed.createComponent(DisplayGifByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
