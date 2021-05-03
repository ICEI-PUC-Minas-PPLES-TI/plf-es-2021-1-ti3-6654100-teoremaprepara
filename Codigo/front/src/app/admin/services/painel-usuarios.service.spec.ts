import { TestBed } from '@angular/core/testing';

import { PainelUsuariosService } from './painel-usuarios.service';

describe('PainelUsuariosService', () => {
  let service: PainelUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PainelUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
