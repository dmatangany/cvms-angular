import { ClrLoadingState } from '@clr/angular';

import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { EventsEntity } from '@membership-application/events/data-access';
import { EventPackagesEntity } from '@membership-application/event-packages/data-access';

@Component({
  selector: 'membership-application-events-subscriptions-ui',
  templateUrl: './events-subscriptions-ui.component.html',
  styleUrls: ['./events-subscriptions-ui.component.scss'],
})
export class EventsSubscriptionsUiComponent implements OnInit {
  @Input() event!: EventsEntity;
  @Input() eventPackages!: EventPackagesEntity[];
  @Input() btnState$!: ClrLoadingState;
  @Output() subscribe = new EventEmitter();
  @Output() closeModal = new EventEmitter();
  eventPackageId: any;

  opened = true;
  constructor() {}

  ngOnInit(): void {}
}
