import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedloopAutomationComponent } from './closedloop-automation.component';

describe('ClosedloopAutomationComponent', () => {
  let component: ClosedloopAutomationComponent;
  let fixture: ComponentFixture<ClosedloopAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClosedloopAutomationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClosedloopAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
