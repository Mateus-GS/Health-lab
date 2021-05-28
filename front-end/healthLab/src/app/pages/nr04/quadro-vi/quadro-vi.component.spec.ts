import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadroVIComponent } from './quadro-vi.component';

describe('QuadroVIComponent', () => {
  let component: QuadroVIComponent;
  let fixture: ComponentFixture<QuadroVIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuadroVIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadroVIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
