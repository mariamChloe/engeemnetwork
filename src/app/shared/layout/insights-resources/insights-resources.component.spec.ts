import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsResourcesComponent } from './insights-resources.component';

describe('InsightsResourcesComponent', () => {
  let component: InsightsResourcesComponent;
  let fixture: ComponentFixture<InsightsResourcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsightsResourcesComponent]
    });
    fixture = TestBed.createComponent(InsightsResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
