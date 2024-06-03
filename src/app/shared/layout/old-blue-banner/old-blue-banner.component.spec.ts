import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldBlueBannerComponent } from './old-blue-banner.component';

describe('OldBlueBannerComponent', () => {
  let component: OldBlueBannerComponent;
  let fixture: ComponentFixture<OldBlueBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OldBlueBannerComponent]
    });
    fixture = TestBed.createComponent(OldBlueBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
