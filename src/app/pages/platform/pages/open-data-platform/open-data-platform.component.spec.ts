import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDataPlatformComponent } from './open-data-platform.component';

describe('OpenDataPlatformComponent', () => {
  let component: OpenDataPlatformComponent;
  let fixture: ComponentFixture<OpenDataPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenDataPlatformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenDataPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
