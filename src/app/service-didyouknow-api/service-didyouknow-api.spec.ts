import { TestBed } from '@angular/core/testing';

import { ServiceDidyouknowApi } from './service-didyouknow-api';

describe('ServiceDidyouknowApi', () => {
  let service: ServiceDidyouknowApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDidyouknowApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
