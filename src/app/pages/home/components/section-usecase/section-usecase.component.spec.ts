import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionUsecaseComponent } from './section-usecase.component';

describe('SectionUsecaseComponent', () => {
  let component: SectionUsecaseComponent;
  let fixture: ComponentFixture<SectionUsecaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionUsecaseComponent]
    });
    fixture = TestBed.createComponent(SectionUsecaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
