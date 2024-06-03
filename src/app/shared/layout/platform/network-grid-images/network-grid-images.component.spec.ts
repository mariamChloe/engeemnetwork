import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkGridImagesComponent } from './network-grid-images.component';

describe('TwoImagesComponent', () => {
  let component: NetworkGridImagesComponent;
  let fixture: ComponentFixture<NetworkGridImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NetworkGridImagesComponent]
    });
    fixture = TestBed.createComponent(NetworkGridImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
