import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadroIVComponent } from './quadro-iv.component';

describe('QuadroIVComponent', () => {
  let component: QuadroIVComponent;
  let fixture: ComponentFixture<QuadroIVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuadroIVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadroIVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
