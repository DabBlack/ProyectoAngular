import { TestBed } from '@angular/core/testing';

import { ServiceJuegosService } from './service-juegos.service';

describe('ServiceJuegosService', () => {
  let service: ServiceJuegosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceJuegosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
