import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnifiedEnterpriseDataComponent } from './unified-enterprise-data.component';

describe('UnifiedEnterpriseDataComponent', () => {
  let component: UnifiedEnterpriseDataComponent;
  let fixture: ComponentFixture<UnifiedEnterpriseDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnifiedEnterpriseDataComponent]
    });
    fixture = TestBed.createComponent(UnifiedEnterpriseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
