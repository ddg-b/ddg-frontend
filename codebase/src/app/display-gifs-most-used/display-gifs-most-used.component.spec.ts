import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGifsMostUsedComponent } from './display-gifs-most-used.component';

describe('DisplayGifsMostUsedComponent', () => {
  let component: DisplayGifsMostUsedComponent;
  let fixture: ComponentFixture<DisplayGifsMostUsedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayGifsMostUsedComponent]
    });
    fixture = TestBed.createComponent(DisplayGifsMostUsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
