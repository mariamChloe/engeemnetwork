import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutonomousNetworkServicesComponent } from './autonomous-network-services.component';

describe('AutonomousNetworkServicesComponent', () => {
  let component: AutonomousNetworkServicesComponent;
  let fixture: ComponentFixture<AutonomousNetworkServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutonomousNetworkServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutonomousNetworkServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
