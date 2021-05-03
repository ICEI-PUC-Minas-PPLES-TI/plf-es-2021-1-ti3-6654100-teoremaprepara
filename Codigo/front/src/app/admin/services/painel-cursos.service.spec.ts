import { TestBed } from '@angular/core/testing';

import { PainelCursosService } from './painel-cursos.service';

describe('PainelCursosService', () => {
  let service: PainelCursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PainelCursosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
