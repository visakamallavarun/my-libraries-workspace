import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryLibComponent } from './category-lib.component';

describe('CategoryLibComponent', () => {
  let component: CategoryLibComponent;
  let fixture: ComponentFixture<CategoryLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryLibComponent]
    });
    fixture = TestBed.createComponent(CategoryLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
