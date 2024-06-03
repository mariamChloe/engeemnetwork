import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualitySLSSLADesignComponent } from './quality-sls-sla-design.component';

describe('QualitySLSSLADesignComponent', () => {
  let component: QualitySLSSLADesignComponent;
  let fixture: ComponentFixture<QualitySLSSLADesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualitySLSSLADesignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QualitySLSSLADesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
