import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentBasedChangeReliabilityComponent } from './intent-based-change-reliability.component';

describe('IntentBasedChangeReliabilityComponent', () => {
  let component: IntentBasedChangeReliabilityComponent;
  let fixture: ComponentFixture<IntentBasedChangeReliabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntentBasedChangeReliabilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntentBasedChangeReliabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
