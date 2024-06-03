import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammableAppWorkflowsComponent } from './programmable-app-workflows.component';

describe('ProgrammableAppWorkflowsComponent', () => {
  let component: ProgrammableAppWorkflowsComponent;
  let fixture: ComponentFixture<ProgrammableAppWorkflowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrammableAppWorkflowsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgrammableAppWorkflowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
