import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkStripedBannerComponent } from './network-striped-banner.component';

describe('NetworkStripedBannerComponent', () => {
  let component: NetworkStripedBannerComponent;
  let fixture: ComponentFixture<NetworkStripedBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworkStripedBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NetworkStripedBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
