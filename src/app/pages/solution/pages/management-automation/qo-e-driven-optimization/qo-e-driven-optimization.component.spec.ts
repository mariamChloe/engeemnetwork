import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QoEDrivenOptimizationComponent } from './qo-e-driven-optimization.component';

describe('QoEDrivenOptimizationComponent', () => {
  let component: QoEDrivenOptimizationComponent;
  let fixture: ComponentFixture<QoEDrivenOptimizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QoEDrivenOptimizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QoEDrivenOptimizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
