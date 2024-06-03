import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernDecisionDeliverySystemComponent } from './modern-decision-delivery-system.component';

describe('ModernDecisionDeliverySystemComponent', () => {
  let component: ModernDecisionDeliverySystemComponent;
  let fixture: ComponentFixture<ModernDecisionDeliverySystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModernDecisionDeliverySystemComponent]
    });
    fixture = TestBed.createComponent(ModernDecisionDeliverySystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
