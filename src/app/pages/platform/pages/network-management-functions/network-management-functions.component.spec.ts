import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkManagementFunctionsComponent } from './network-management-functions.component';

describe('NetworkManagementFunctionsComponent', () => {
  let component: NetworkManagementFunctionsComponent;
  let fixture: ComponentFixture<NetworkManagementFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworkManagementFunctionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NetworkManagementFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
