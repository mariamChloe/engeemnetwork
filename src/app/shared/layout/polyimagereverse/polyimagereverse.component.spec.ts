import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolyimagereverseComponent } from './polyimagereverse.component';

describe('PolyimagereverseComponent', () => {
  let component: PolyimagereverseComponent;
  let fixture: ComponentFixture<PolyimagereverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolyimagereverseComponent]
    });
    fixture = TestBed.createComponent(PolyimagereverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
