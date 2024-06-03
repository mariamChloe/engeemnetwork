import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseDigitizationAutomationComponent } from './enterprise-digitization-automation.component';

describe('EnterpriseDigitizationAutomationComponent', () => {
  let component: EnterpriseDigitizationAutomationComponent;
  let fixture: ComponentFixture<EnterpriseDigitizationAutomationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterpriseDigitizationAutomationComponent]
    });
    fixture = TestBed.createComponent(EnterpriseDigitizationAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
