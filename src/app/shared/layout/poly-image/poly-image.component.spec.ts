import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolyImageComponent } from './poly-image.component';

describe('PolyImageComponent', () => {
  let component: PolyImageComponent;
  let fixture: ComponentFixture<PolyImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolyImageComponent]
    });
    fixture = TestBed.createComponent(PolyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
