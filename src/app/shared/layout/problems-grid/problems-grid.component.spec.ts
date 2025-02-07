import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemsGridComponent } from './problems-grid.component';

describe('ProblemsGridComponent', () => {
  let component: ProblemsGridComponent;
  let fixture: ComponentFixture<ProblemsGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProblemsGridComponent]
    });
    fixture = TestBed.createComponent(ProblemsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
