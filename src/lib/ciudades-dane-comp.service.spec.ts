import { TestBed } from '@angular/core/testing';

import { CiudadesDaneCompService } from './ciudades-dane-comp.service';

describe('CiudadesDaneCompService', () => {
  let service: CiudadesDaneCompService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CiudadesDaneCompService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
