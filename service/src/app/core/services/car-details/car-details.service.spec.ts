import { TestBed } from '@angular/core/testing';

import { CarDetailsService } from './car-details.service';

describe('CarDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarDetailsService = TestBed.get(CarDetailsService);
    expect(service).toBeTruthy();
  });
});
