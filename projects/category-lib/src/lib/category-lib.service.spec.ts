import { TestBed } from '@angular/core/testing';

import { CategoryLibService } from './category-lib.service';

describe('CategoryLibService', () => {
  let service: CategoryLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
