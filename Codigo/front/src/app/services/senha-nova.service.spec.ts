import { TestBed } from '@angular/core/testing';

import { SenhaNovaService } from './senha-nova.service';

describe('SenhaNovaService', () => {
  let service: SenhaNovaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SenhaNovaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
