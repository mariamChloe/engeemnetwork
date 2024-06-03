import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkProblemsGridComponent } from './network-problems-grid.component';

describe('ProblemsGridComponent', () => {
  let component: NetworkProblemsGridComponent;
  let fixture: ComponentFixture<NetworkProblemsGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NetworkProblemsGridComponent]
    });
    fixture = TestBed.createComponent(NetworkProblemsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
