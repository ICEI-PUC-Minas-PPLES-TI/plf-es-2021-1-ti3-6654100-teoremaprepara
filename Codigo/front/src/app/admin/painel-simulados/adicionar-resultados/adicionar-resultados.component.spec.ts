import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarResultadosComponent } from './adicionar-resultados.component';

describe('AdicionarResultadosComponent', () => {
  let component: AdicionarResultadosComponent;
  let fixture: ComponentFixture<AdicionarResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarResultadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
