import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelMateriaisComponent } from './painel-materiais.component';

describe('PainelMateriaisComponent', () => {
  let component: PainelMateriaisComponent;
  let fixture: ComponentFixture<PainelMateriaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelMateriaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelMateriaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
