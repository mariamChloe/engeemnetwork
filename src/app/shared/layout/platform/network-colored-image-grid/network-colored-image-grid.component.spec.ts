import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkColoredImageGridComponent } from './network-colored-image-grid.component';

describe('NetworkColoredImageGridComponent', () => {
  let component: NetworkColoredImageGridComponent;
  let fixture: ComponentFixture<NetworkColoredImageGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworkColoredImageGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NetworkColoredImageGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
