import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProblemComponent } from './section-problem.component';

describe('SectionProblemComponent', () => {
  let component: SectionProblemComponent;
  let fixture: ComponentFixture<SectionProblemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionProblemComponent]
    });
    fixture = TestBed.createComponent(SectionProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
