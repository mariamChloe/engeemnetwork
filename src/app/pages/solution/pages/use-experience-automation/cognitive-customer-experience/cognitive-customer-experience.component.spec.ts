import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CognitiveCustomerExperienceComponent } from './cognitive-customer-experience.component';

describe('CognitiveCustomerExperienceComponent', () => {
  let component: CognitiveCustomerExperienceComponent;
  let fixture: ComponentFixture<CognitiveCustomerExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CognitiveCustomerExperienceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CognitiveCustomerExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
