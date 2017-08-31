import { TestBed, inject } from '@angular/core/testing';

import { PttypeService } from './pttype.service';

describe('PttypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PttypeService]
    });
  });

  it('should be created', inject([PttypeService], (service: PttypeService) => {
    expect(service).toBeTruthy();
  }));
});
