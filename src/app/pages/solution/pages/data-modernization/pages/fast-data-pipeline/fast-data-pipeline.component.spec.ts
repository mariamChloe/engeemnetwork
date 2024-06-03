import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastDataPipelineComponent } from './fast-data-pipeline.component';

describe('FastDataPipelineComponent', () => {
  let component: FastDataPipelineComponent;
  let fixture: ComponentFixture<FastDataPipelineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FastDataPipelineComponent]
    });
    fixture = TestBed.createComponent(FastDataPipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
