import { TestBed, inject } from '@angular/core/testing';

import { HosxpService } from './hosxp.service';

describe('HosxpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HosxpService]
    });
  });

  it('should be created', inject([HosxpService], (service: HosxpService) => {
    expect(service).toBeTruthy();
  }));
});
