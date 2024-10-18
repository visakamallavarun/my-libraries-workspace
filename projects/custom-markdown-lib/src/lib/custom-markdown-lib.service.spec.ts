import { TestBed } from '@angular/core/testing';

import { CustomMarkdownLibService } from './custom-markdown-lib.service';

describe('CustomMarkdownLibService', () => {
  let service: CustomMarkdownLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomMarkdownLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
