import { TestBed, inject } from '@angular/core/testing';

import { DebtServiceService } from './debt-service.service';

describe('DebtServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DebtServiceService]
    });
  });

  it('should be created', inject([DebtServiceService], (service: DebtServiceService) => {
    expect(service).toBeTruthy();
  }));
});
