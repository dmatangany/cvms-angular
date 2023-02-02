import { Injectable } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { select, Store, Action } from '@ngrx/store';

import * as EventPackagesActions from './event-packages.actions';
import { EventPackagesEntity } from './event-packages.models';
import * as EventPackagesFeature from './event-packages.reducer';
import * as EventPackagesSelectors from './event-packages.selectors';

@Injectable()
export class EventPackagesFacade {
  loaded$ = this.store.pipe(
    select(EventPackagesSelectors.getEventPackagesLoaded)
  );
  allEventPackages$ = this.store.pipe(
    select(EventPackagesSelectors.getAllEventPackages)
  );
  selectedEventPackage$ = this.store.pipe(
    select(EventPackagesSelectors.getSelectedEventPackage)
  );
  loading$ = this.store.pipe(
    select(EventPackagesSelectors.getEventPackagesLoadingState)
  );
  totalEventPackages$ = this.store.pipe(
    select(EventPackagesSelectors.getTotalEventPackages)
  );
  btnState$ = this.store.pipe(select(EventPackagesSelectors.getBtnState));

  constructor(
    private store: Store<EventPackagesFeature.EventPackagesPartialState>
  ) {}

  getPaginatedEventPackages(state: ClrDatagridStateInterface) {
    this.store.dispatch(
      EventPackagesActions.getPaginatedEventPackages({ state })
    );
  }

  getAllEventPackages(eventId: any) {
    this.store.dispatch(EventPackagesActions.getAllEventPackages({ eventId }));
  }

  getEventPackage(eventPackageId: string | number) {
    this.store.dispatch(
      EventPackagesActions.getEventPackageById({
        eventPackageId,
      })
    );
  }

  createNewEventPackage(eventPackage: EventPackagesEntity) {
    this.store.dispatch(EventPackagesActions.createEventPackage(eventPackage));
  }

  updateEventPackage(eventPackage: EventPackagesEntity) {
    this.store.dispatch(EventPackagesActions.updateEventPackage(eventPackage));
  }

  deleteEventPackage(eventPackageId: string | number) {
    this.store.dispatch(
      EventPackagesActions.deleteEventPackage({
        eventPackageId,
      })
    );
  }
}
