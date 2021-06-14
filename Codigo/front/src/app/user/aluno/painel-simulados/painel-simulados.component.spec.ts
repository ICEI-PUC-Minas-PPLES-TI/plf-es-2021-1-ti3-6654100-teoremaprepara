import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelSimuladosComponent } from './painel-simulados.component';

describe('PainelSimuladosComponent', () => {
  let component: PainelSimuladosComponent;
  let fixture: ComponentFixture<PainelSimuladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelSimuladosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelSimuladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
