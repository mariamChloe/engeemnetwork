import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSolutionsComponentComponent } from './section-solutions-component.component';

describe('SectionSolutionsComponentComponent', () => {
  let component: SectionSolutionsComponentComponent;
  let fixture: ComponentFixture<SectionSolutionsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionSolutionsComponentComponent]
    });
    fixture = TestBed.createComponent(SectionSolutionsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
