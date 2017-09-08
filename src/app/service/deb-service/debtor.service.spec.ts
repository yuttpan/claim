import { TestBed, inject } from '@angular/core/testing';

import { DebtorService } from './debtor.service';

describe('DebtorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DebtorService]
    });
  });

  it('should be created', inject([DebtorService], (service: DebtorService) => {
    expect(service).toBeTruthy();
  }));
});
