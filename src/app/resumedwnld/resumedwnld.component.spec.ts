/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResumedwnldComponent } from './resumedwnld.component';

describe('ResumedwnldComponent', () => {
  let component: ResumedwnldComponent;
  let fixture: ComponentFixture<ResumedwnldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumedwnldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumedwnldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
