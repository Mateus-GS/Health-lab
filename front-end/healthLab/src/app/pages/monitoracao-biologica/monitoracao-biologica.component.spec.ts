import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoracaoBiologicaComponent } from './monitoracao-biologica.component';

describe('MonitoracaoBiologicaComponent', () => {
  let component: MonitoracaoBiologicaComponent;
  let fixture: ComponentFixture<MonitoracaoBiologicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitoracaoBiologicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoracaoBiologicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
