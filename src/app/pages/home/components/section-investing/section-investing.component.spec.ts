import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionInvestingComponent } from './section-investing.component';

describe('SectionInvestingComponent', () => {
  let component: SectionInvestingComponent;
  let fixture: ComponentFixture<SectionInvestingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionInvestingComponent]
    });
    fixture = TestBed.createComponent(SectionInvestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
