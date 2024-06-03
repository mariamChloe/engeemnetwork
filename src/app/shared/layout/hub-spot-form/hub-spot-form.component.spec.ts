import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubSpotFormComponent } from './hub-spot-form.component';

describe('HubSpotFormComponent', () => {
  let component: HubSpotFormComponent;
  let fixture: ComponentFixture<HubSpotFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HubSpotFormComponent]
    });
    fixture = TestBed.createComponent(HubSpotFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
