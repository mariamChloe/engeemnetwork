import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkSolutionKeyFeatureComponent } from './network-solution-key-feature.component';

describe('NetworkSolutionKeyFeatureComponent', () => {
  let component: NetworkSolutionKeyFeatureComponent;
  let fixture: ComponentFixture<NetworkSolutionKeyFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworkSolutionKeyFeatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NetworkSolutionKeyFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
