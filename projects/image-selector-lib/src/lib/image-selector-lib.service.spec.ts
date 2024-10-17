import { TestBed } from '@angular/core/testing';

import { ImageSelectorLibService } from './image-selector-lib.service';

describe('ImageSelectorLibService', () => {
  let service: ImageSelectorLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageSelectorLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
