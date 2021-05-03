import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelCursosComponent } from './painel-cursos.component';

describe('PainelCursosComponent', () => {
  let component: PainelCursosComponent;
  let fixture: ComponentFixture<PainelCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
