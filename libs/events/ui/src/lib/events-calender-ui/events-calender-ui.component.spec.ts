import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCalenderUiComponent } from './events-calender-ui.component';

describe('EventsCalenderUiComponent', () => {
  let component: EventsCalenderUiComponent;
  let fixture: ComponentFixture<EventsCalenderUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventsCalenderUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EventsCalenderUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
