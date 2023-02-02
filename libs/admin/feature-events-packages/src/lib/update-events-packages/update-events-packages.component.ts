import { Route, ActivatedRoute } from '@angular/router';
import { EventPackagesEntity } from '@membership-application/event-packages/data-access';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClrLoadingState } from '@clr/angular';
import { CurrenciesFacade } from '@membership-application/currencies/data-access';
import { EventPackagesFacade } from '@membership-application/event-packages/data-access';
import { EventsFacade } from '@membership-application/events/data-access';
import { Subscription } from 'rxjs';

@Component({
  selector: 'membership-application-update-events-packages',
  templateUrl: './update-events-packages.component.html',
  styleUrls: ['./update-events-packages.component.css'],
})
export class UpdateEventsPackagesComponent implements OnInit {
  @Input() eventPackage!: EventPackagesEntity;
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
    this.eventsPackagesFacade.updateEventPackage(events);
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
