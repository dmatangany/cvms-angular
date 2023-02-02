import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsSubscriptionsUiComponent } from './events-subscriptions-ui.component';

describe('EventsSubscriptionsUiComponent', () => {
  let component: EventsSubscriptionsUiComponent;
  let fixture: ComponentFixture<EventsSubscriptionsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventsSubscriptionsUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EventsSubscriptionsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
