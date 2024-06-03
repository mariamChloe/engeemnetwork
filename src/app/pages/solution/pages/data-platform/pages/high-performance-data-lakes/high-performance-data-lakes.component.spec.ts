import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighPerformanceDataLakesComponent } from './high-performance-data-lakes.component';

describe('HighPerformanceDataLakesComponent', () => {
  let component: HighPerformanceDataLakesComponent;
  let fixture: ComponentFixture<HighPerformanceDataLakesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighPerformanceDataLakesComponent]
    });
    fixture = TestBed.createComponent(HighPerformanceDataLakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
