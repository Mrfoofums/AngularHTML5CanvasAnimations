import { TestBed, inject } from '@angular/core/testing';

import { NumberUtilService } from './number-util.service';

describe('NumberUtilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NumberUtilService]
    });
  });

  it('should be created', inject([NumberUtilService], (service: NumberUtilService) => {
    expect(service).toBeTruthy();
  }));
});
