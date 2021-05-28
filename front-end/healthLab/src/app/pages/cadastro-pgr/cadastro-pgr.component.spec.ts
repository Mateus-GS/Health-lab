import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPgrComponent } from './cadastro-pgr.component';

describe('CadastroPgrComponent', () => {
  let component: CadastroPgrComponent;
  let fixture: ComponentFixture<CadastroPgrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroPgrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
