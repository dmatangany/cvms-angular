import { Component, Input, OnInit } from '@angular/core';
import { EventsEntity } from '@membership-application/events/data-access';

@Component({
  selector: 'membership-application-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css'],
})
export class EventsDetailsComponent implements OnInit {
  @Input() event!: EventsEntity;
  constructor() {}

  ngOnInit(): void {}
}
