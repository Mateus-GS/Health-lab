import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadroIIIComponent } from './quadro-iii.component';

describe('QuadroIIIComponent', () => {
  let component: QuadroIIIComponent;
  let fixture: ComponentFixture<QuadroIIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuadroIIIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadroIIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
