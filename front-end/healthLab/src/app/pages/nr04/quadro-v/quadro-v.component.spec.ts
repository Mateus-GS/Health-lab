import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadroVComponent } from './quadro-v.component';

describe('QuadroVComponent', () => {
  let component: QuadroVComponent;
  let fixture: ComponentFixture<QuadroVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuadroVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadroVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
