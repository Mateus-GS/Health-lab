import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordPppComponent } from './dashbord-ppp.component';

describe('DashbordPppComponent', () => {
  let component: DashbordPppComponent;
  let fixture: ComponentFixture<DashbordPppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordPppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordPppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
