import { Component, OnInit } from '@angular/core';

import {
  EventsEntity,
  EventsFacade,
} from '@membership-application/events/data-access';

@Component({
  selector: 'membership-application-events-calendar',
  templateUrl: './events-calendar.component.html',
  styleUrls: ['./events-calendar.component.scss'],
})
export class EventsCalendarComponent implements OnInit {
  eventId: any;
  subscribeEvent = false;

  constructor(public eventsFacade: EventsFacade) {}

  ngOnInit(): void {
    this.eventsFacade.getAllEvents();
  }

  handleEvent(event: any) {
    this.eventId = event.id;
    this.subscribeEvent = true;
  }
}
