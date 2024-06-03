import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserImpactAnalysisComponent } from './user-impact-analysis.component';

describe('UserImpactAnalysisComponent', () => {
  let component: UserImpactAnalysisComponent;
  let fixture: ComponentFixture<UserImpactAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserImpactAnalysisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserImpactAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
