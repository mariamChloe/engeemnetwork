import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityOfExperienceComponent } from './quality-of-experience.component';

describe('QualityOfExperienceComponent', () => {
  let component: QualityOfExperienceComponent;
  let fixture: ComponentFixture<QualityOfExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualityOfExperienceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QualityOfExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
