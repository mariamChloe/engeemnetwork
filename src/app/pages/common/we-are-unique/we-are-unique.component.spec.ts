import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeAreUniqueComponent } from './we-are-unique.component';

describe('WeAreUniqueComponent', () => {
  let component: WeAreUniqueComponent;
  let fixture: ComponentFixture<WeAreUniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeAreUniqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeAreUniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
