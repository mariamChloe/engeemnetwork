import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerFormComponent } from './viewer-form.component';

describe('ViewerFormComponent', () => {
  let component: ViewerFormComponent;
  let fixture: ComponentFixture<ViewerFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewerFormComponent]
    });
    fixture = TestBed.createComponent(ViewerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
