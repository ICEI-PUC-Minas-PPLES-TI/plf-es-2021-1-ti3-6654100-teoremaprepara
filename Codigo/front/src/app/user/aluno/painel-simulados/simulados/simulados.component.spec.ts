import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimuladosComponent } from './simulados.component';

describe('SimuladosComponent', () => {
  let component: SimuladosComponent;
  let fixture: ComponentFixture<SimuladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimuladosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimuladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
