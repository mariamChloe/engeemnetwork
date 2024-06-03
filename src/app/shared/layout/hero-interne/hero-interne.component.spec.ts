import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroInterneComponent } from './hero-interne.component';

describe('HeroInterneComponent', () => {
  let component: HeroInterneComponent;
  let fixture: ComponentFixture<HeroInterneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroInterneComponent]
    });
    fixture = TestBed.createComponent(HeroInterneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
