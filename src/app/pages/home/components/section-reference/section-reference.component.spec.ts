import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionReferenceComponent } from './section-reference.component';

describe('SectionReferenceComponent', () => {
  let component: SectionReferenceComponent;
  let fixture: ComponentFixture<SectionReferenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionReferenceComponent]
    });
    fixture = TestBed.createComponent(SectionReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
