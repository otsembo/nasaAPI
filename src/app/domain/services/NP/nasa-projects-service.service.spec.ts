import { TestBed } from '@angular/core/testing';

import { NasaProjectsServiceService } from './nasa-projects-service.service';

describe('NasaProjectsServiceService', () => {
  let service: NasaProjectsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasaProjectsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
