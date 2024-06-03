import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyAndExpertiseComponent } from './technology-and-expertise.component';

describe('TechnologyAndExpertiseComponent', () => {
  let component: TechnologyAndExpertiseComponent;
  let fixture: ComponentFixture<TechnologyAndExpertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologyAndExpertiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechnologyAndExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
