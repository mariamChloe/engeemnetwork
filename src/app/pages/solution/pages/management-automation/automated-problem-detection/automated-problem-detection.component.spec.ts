import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatedProblemDetectionComponent } from './automated-problem-detection.component';

describe('AutomatedProblemDetectionComponent', () => {
  let component: AutomatedProblemDetectionComponent;
  let fixture: ComponentFixture<AutomatedProblemDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomatedProblemDetectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutomatedProblemDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
