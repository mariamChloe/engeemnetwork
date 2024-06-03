import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyperDataSeedComponent } from './hyper-data-seed.component';

describe('HyperDataSeedComponent', () => {
  let component: HyperDataSeedComponent;
  let fixture: ComponentFixture<HyperDataSeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HyperDataSeedComponent]
    });
    fixture = TestBed.createComponent(HyperDataSeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
