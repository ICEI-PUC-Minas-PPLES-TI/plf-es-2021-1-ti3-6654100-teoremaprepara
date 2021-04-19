import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelUsuariosComponent } from './painel-usuarios.component';

describe('PainelUsuariosComponent', () => {
  let component: PainelUsuariosComponent;
  let fixture: ComponentFixture<PainelUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
