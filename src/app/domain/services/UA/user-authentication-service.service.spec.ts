import { TestBed } from '@angular/core/testing';

import { UserAuthenticationServiceService } from './user-authentication-service.service';

describe('UserAuthenticationServiceService', () => {
  let service: UserAuthenticationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAuthenticationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
