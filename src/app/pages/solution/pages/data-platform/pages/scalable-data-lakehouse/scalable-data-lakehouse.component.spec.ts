import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalableDataLakehouseComponent } from './scalable-data-lakehouse.component';

describe('ScalableDataLakehouseComponent', () => {
  let component: ScalableDataLakehouseComponent;
  let fixture: ComponentFixture<ScalableDataLakehouseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScalableDataLakehouseComponent]
    });
    fixture = TestBed.createComponent(ScalableDataLakehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
