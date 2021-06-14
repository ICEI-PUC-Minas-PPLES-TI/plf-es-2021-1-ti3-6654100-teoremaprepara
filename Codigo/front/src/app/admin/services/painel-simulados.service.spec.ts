import { TestBed } from '@angular/core/testing';

import { PainelSimuladosService } from './painel-simulados.service';

describe('PainelSimuladosService', () => {
  let service: PainelSimuladosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PainelSimuladosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
