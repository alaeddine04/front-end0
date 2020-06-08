import { TestBed } from '@angular/core/testing';

import { BenevolService } from './benevol.service';

describe('BenevolService', () => {
  let service: BenevolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BenevolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
