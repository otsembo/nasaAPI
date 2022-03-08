import { TestBed } from '@angular/core/testing';

import { MarsRoverImageServiceService } from './mars-rover-image-service.service';

describe('MarsRoverImageServiceService', () => {
  let service: MarsRoverImageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarsRoverImageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
