import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPgrComponent } from './dashboard-pgr.component';

describe('DashboardPgrComponent', () => {
  let component: DashboardPgrComponent;
  let fixture: ComponentFixture<DashboardPgrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPgrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
