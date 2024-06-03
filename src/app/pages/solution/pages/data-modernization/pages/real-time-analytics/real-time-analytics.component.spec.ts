import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeAnalyticsComponent } from './real-time-analytics.component';

describe('RealTimeAnalyticsComponent', () => {
  let component: RealTimeAnalyticsComponent;
  let fixture: ComponentFixture<RealTimeAnalyticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealTimeAnalyticsComponent]
    });
    fixture = TestBed.createComponent(RealTimeAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
