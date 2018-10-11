import { TestBed, inject } from '@angular/core/testing';

import { CircularSimService } from './circular-sim.service';

describe('CircularSimService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CircularSimService]
    });
  });

  it('should be created', inject([CircularSimService], (service: CircularSimService) => {
    expect(service).toBeTruthy();
  }));
});
