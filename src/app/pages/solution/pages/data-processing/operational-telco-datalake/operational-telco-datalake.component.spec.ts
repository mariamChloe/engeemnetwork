import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalTelcoDatalakeComponent } from './operational-telco-datalake.component';

describe('OperationalTelcoDatalakeComponent', () => {
  let component: OperationalTelcoDatalakeComponent;
  let fixture: ComponentFixture<OperationalTelcoDatalakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationalTelcoDatalakeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperationalTelcoDatalakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
