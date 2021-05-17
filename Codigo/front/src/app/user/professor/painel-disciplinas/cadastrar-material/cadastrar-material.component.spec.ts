import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarMaterialComponent } from './cadastrar-material.component';

describe('CadastrarMaterialComponent', () => {
  let component: CadastrarMaterialComponent;
  let fixture: ComponentFixture<CadastrarMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
