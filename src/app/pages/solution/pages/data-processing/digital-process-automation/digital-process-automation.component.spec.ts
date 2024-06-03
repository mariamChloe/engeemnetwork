import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalProcessAutomationComponent } from './digital-process-automation.component';

describe('DigitalProcessAutomationComponent', () => {
  let component: DigitalProcessAutomationComponent;
  let fixture: ComponentFixture<DigitalProcessAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalProcessAutomationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DigitalProcessAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
