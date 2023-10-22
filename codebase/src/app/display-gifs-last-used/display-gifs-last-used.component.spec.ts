import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGifsLastUsedComponent } from './display-gifs-last-used.component';

describe('DisplayGifsLastUsedComponent', () => {
  let component: DisplayGifsLastUsedComponent;
  let fixture: ComponentFixture<DisplayGifsLastUsedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayGifsLastUsedComponent]
    });
    fixture = TestBed.createComponent(DisplayGifsLastUsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
