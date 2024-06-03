import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkDataProcessingComponent } from './network-data-processing.component';

describe('NetworkDataProcessingComponent', () => {
  let component: NetworkDataProcessingComponent;
  let fixture: ComponentFixture<NetworkDataProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworkDataProcessingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NetworkDataProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
