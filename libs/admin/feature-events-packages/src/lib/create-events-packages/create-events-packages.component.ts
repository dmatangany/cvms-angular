import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClrLoadingState } from '@clr/angular';
import { CurrenciesFacade } from '@membership-application/currencies/data-access';
import { EventPackagesFacade } from '@membership-application/event-packages/data-access';
import { EventsFacade } from '@membership-application/events/data-access';
import { Subscription } from 'rxjs';

@Component({
  selector: 'membership-application-create-events-packages',
  templateUrl: './create-events-packages.component.html',
  styleUrls: ['./create-events-packages.component.css'],
})
export class CreateEventsPackagesComponent implements OnInit {
  @Input() eventId: any;
  @Output() closeModal = new EventEmitter();
  public sub = new Subscription();
  loading = ClrLoadingState.DEFAULT;

  constructor(
    public eventsPackagesFacade: EventPackagesFacade,
    public currenciesFacade: CurrenciesFacade,
    public eventsFacade: EventsFacade,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCurrencies();
    //this.getEvents();
  }

  onSubmit(events: any) {
    events.eventId = this.route.snapshot.paramMap.get('eventId')!;
    this.eventsPackagesFacade.createNewEventPackage(events);
    this.eventsPackagesFacade.loaded$.subscribe((res) =>
      res ? this.closeModal.emit(true) : null
    );
  }

  getCurrencies() {
    this.currenciesFacade.getAllCurrencies();
  }

  getEvents() {
    this.eventsFacade.getAllEvents();
  }
}
