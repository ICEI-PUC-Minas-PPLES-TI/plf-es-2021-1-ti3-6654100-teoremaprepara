import { TestBed } from '@angular/core/testing';

import { PainelDisciplinasService } from './painel-disciplinas.service';

describe('PainelDisciplinasService', () => {
  let service: PainelDisciplinasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PainelDisciplinasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
