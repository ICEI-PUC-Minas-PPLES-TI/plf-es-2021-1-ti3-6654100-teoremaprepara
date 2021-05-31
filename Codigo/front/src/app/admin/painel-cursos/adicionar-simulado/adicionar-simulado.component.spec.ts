import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarSimuladoComponent } from './adicionar-simulado.component';

describe('AdicionarSimuladoComponent', () => {
  let component: AdicionarSimuladoComponent;
  let fixture: ComponentFixture<AdicionarSimuladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarSimuladoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarSimuladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
