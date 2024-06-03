import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoImagesComponent } from './two-images.component';

describe('TwoImagesComponent', () => {
  let component: TwoImagesComponent;
  let fixture: ComponentFixture<TwoImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoImagesComponent]
    });
    fixture = TestBed.createComponent(TwoImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
