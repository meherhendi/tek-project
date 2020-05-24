import { TestBed } from '@angular/core/testing';

import { CertifService } from './certif.service';

describe('CertifService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CertifService = TestBed.get(CertifService);
    expect(service).toBeTruthy();
  });
});
