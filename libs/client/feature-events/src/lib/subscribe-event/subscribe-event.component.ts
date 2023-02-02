import { EventPackagesFacade } from '@membership-application/event-packages/data-access';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { EventsFacade } from '@membership-application/events/data-access';

@Component({
  selector: 'membership-application-subscribe-event',
  templateUrl: './subscribe-event.component.html',
  styleUrls: ['./subscribe-event.component.scss'],
})
export class SubscribeEventComponent implements OnInit {
  @Input() eventId: any;
  @Output() closeModal = new EventEmitter();

  constructor(
    public eventsFacade: EventsFacade,
    public eventPackagesFacade: EventPackagesFacade
  ) {}

  ngOnInit(): void {
    this.eventsFacade.getEvent(this.eventId);
    this.eventPackagesFacade.getAllEventPackages(this.eventId);
  }

  onSubmit() {
    this.eventsFacade.subscribeToAnEvent(this.eventId);
    this.eventsFacade.loaded$.subscribe((res) =>
      res ? this.closeModal.emit(true) : null
    );
  }
}
