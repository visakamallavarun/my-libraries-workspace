import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMarkdownLibComponent } from './custom-markdown-lib.component';

describe('CustomMarkdownLibComponent', () => {
  let component: CustomMarkdownLibComponent;
  let fixture: ComponentFixture<CustomMarkdownLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomMarkdownLibComponent]
    });
    fixture = TestBed.createComponent(CustomMarkdownLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
