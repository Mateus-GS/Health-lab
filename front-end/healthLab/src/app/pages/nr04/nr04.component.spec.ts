import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr04Component } from './nr04.component';

describe('Nr04Component', () => {
  let component: Nr04Component;
  let fixture: ComponentFixture<Nr04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nr04Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nr04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
