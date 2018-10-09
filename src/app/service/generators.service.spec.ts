import { TestBed, inject } from '@angular/core/testing';

import { GeneratorsService } from './generators.service';

describe('GeneratorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneratorsService]
    });
  });

  it('should be created', inject([GeneratorsService], (service: GeneratorsService) => {
    expect(service).toBeTruthy();
  }));
});
