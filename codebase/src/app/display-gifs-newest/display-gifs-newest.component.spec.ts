import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGifsNewestComponent } from './display-gifs-newest.component';

describe('DisplayGifsNewestComponent', () => {
  let component: DisplayGifsNewestComponent;
  let fixture: ComponentFixture<DisplayGifsNewestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayGifsNewestComponent]
    });
    fixture = TestBed.createComponent(DisplayGifsNewestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
