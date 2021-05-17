import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarAvisosComponent } from './cadastrar-avisos.component';

describe('CadastrarAvisosComponent', () => {
  let component: CadastrarAvisosComponent;
  let fixture: ComponentFixture<CadastrarAvisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarAvisosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarAvisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
