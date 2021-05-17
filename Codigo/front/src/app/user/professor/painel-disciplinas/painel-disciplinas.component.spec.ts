import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelDisciplinasComponent } from './painel-disciplinas.component';

describe('PainelDisciplinasComponent', () => {
  let component: PainelDisciplinasComponent;
  let fixture: ComponentFixture<PainelDisciplinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelDisciplinasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelDisciplinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
