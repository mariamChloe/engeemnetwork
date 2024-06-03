import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataManagementSecurityComponent } from './data-management-security.component';

describe('DataManagementSecurityComponent', () => {
  let component: DataManagementSecurityComponent;
  let fixture: ComponentFixture<DataManagementSecurityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataManagementSecurityComponent]
    });
    fixture = TestBed.createComponent(DataManagementSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
