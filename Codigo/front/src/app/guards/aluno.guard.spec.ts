import { TestBed } from '@angular/core/testing';

import { AlunoGuard } from './aluno.guard';

describe('AlunoGuard', () => {
  let guard: AlunoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AlunoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
