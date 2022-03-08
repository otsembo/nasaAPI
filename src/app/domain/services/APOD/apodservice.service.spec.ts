import { TestBed } from '@angular/core/testing';

import { APODServiceService } from './apodservice.service';

describe('APODServiceService', () => {
  let service: APODServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APODServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
