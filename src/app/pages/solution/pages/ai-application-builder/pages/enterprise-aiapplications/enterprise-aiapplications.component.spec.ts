import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseAIApplicationsComponent } from './enterprise-aiapplications.component';

describe('EnterpriseAIApplicationsComponent', () => {
  let component: EnterpriseAIApplicationsComponent;
  let fixture: ComponentFixture<EnterpriseAIApplicationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterpriseAIApplicationsComponent]
    });
    fixture = TestBed.createComponent(EnterpriseAIApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
