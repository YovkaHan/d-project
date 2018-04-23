import { TestBed, inject } from '@angular/core/testing';

import { WinLossService } from './win-loss.service';

describe('WinLossService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WinLossService]
    });
  });

  it('should be created', inject([WinLossService], (service: WinLossService) => {
    expect(service).toBeTruthy();
  }));
});
