import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatedOperationalAnalyticsComponent } from './automated-operational-analytics.component';

describe('AutomatedOperationalAnalyticsComponent', () => {
  let component: AutomatedOperationalAnalyticsComponent;
  let fixture: ComponentFixture<AutomatedOperationalAnalyticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutomatedOperationalAnalyticsComponent]
    });
    fixture = TestBed.createComponent(AutomatedOperationalAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
