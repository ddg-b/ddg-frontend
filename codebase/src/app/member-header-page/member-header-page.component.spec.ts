import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ApiService} from "../api.service";

import { MemberHeaderPageComponent } from './member-header-page.component';

describe('MemberHeaderPageComponent', () => {
  let component: MemberHeaderPageComponent;
  let fixture: ComponentFixture<MemberHeaderPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemberHeaderPageComponent]
    });
    fixture = TestBed.createComponent(MemberHeaderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
