import { TestBed } from '@angular/core/testing';

import { SpikerLibService } from './spiker-lib.service';

describe('SpikerLibService', () => {
  let service: SpikerLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpikerLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
