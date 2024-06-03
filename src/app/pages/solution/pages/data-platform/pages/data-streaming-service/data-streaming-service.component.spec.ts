import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStreamingServiceComponent } from './data-streaming-service.component';

describe('DataStreamingServiceComponent', () => {
  let component: DataStreamingServiceComponent;
  let fixture: ComponentFixture<DataStreamingServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataStreamingServiceComponent]
    });
    fixture = TestBed.createComponent(DataStreamingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
