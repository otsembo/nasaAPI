import { TestBed } from '@angular/core/testing';

import { NearEarthObjectServiceService } from './near-earth-object-service.service';

describe('NearEarthObjectServiceService', () => {
  let service: NearEarthObjectServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NearEarthObjectServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
