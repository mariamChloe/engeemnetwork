import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIApplicationPlatformComponent } from './aiapplication-platform.component';

describe('AIApplicationPlatformComponent', () => {
  let component: AIApplicationPlatformComponent;
  let fixture: ComponentFixture<AIApplicationPlatformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AIApplicationPlatformComponent]
    });
    fixture = TestBed.createComponent(AIApplicationPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
