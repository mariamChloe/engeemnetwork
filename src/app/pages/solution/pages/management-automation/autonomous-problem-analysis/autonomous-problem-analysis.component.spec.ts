import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutonomousProblemAnalysisComponent } from './autonomous-problem-analysis.component';

describe('AutonomousProblemAnalysisComponent', () => {
  let component: AutonomousProblemAnalysisComponent;
  let fixture: ComponentFixture<AutonomousProblemAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutonomousProblemAnalysisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutonomousProblemAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
