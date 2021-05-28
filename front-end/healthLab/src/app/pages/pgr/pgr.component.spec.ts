import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgrComponent } from './pgr.component';

describe('PgrComponent', () => {
  let component: PgrComponent;
  let fixture: ComponentFixture<PgrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
