import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernNetworkPerformanceComponent } from './modern-network-performance.component';

describe('ModernNetworkPerformanceComponent', () => {
  let component: ModernNetworkPerformanceComponent;
  let fixture: ComponentFixture<ModernNetworkPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModernNetworkPerformanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModernNetworkPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
