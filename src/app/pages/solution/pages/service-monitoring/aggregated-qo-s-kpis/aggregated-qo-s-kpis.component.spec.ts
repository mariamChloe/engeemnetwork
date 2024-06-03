import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregatedQoSKPIsComponent } from './aggregated-qo-s-kpis.component';

describe('AggregatedQoSKPIsComponent', () => {
  let component: AggregatedQoSKPIsComponent;
  let fixture: ComponentFixture<AggregatedQoSKPIsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AggregatedQoSKPIsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AggregatedQoSKPIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
