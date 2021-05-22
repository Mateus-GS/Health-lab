import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCatComponent } from './cadastro-cat.component';

describe('CadastroCatComponent', () => {
  let component: CadastroCatComponent;
  let fixture: ComponentFixture<CadastroCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
