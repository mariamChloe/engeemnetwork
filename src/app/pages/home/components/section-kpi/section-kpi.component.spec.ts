import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionKPIComponent } from './section-kpi.component';

describe('SectionKPIComponent', () => {
  let component: SectionKPIComponent;
  let fixture: ComponentFixture<SectionKPIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionKPIComponent]
    });
    fixture = TestBed.createComponent(SectionKPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
