import { TestBed } from '@angular/core/testing';

import { TokenHandlerService } from './token-handler.service';

describe('TokenHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenHandlerService = TestBed.get(TokenHandlerService);
    expect(service).toBeTruthy();
  });
});
