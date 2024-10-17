import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSelectorLibComponent } from './image-selector-lib.component';

describe('ImageSelectorLibComponent', () => {
  let component: ImageSelectorLibComponent;
  let fixture: ComponentFixture<ImageSelectorLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageSelectorLibComponent]
    });
    fixture = TestBed.createComponent(ImageSelectorLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
