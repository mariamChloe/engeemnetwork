import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NOCAlarmAggregationComponent } from './noc-alarm-aggregation.component';

describe('NOCAlarmAggregationComponent', () => {
  let component: NOCAlarmAggregationComponent;
  let fixture: ComponentFixture<NOCAlarmAggregationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NOCAlarmAggregationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NOCAlarmAggregationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
