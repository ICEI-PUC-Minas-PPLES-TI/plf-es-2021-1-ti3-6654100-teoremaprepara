import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedefinirSenhaNovaComponent } from './redefinir-senha-nova.component';

describe('RedefinirSenhaNovaComponent', () => {
  let component: RedefinirSenhaNovaComponent;
  let fixture: ComponentFixture<RedefinirSenhaNovaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedefinirSenhaNovaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedefinirSenhaNovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
