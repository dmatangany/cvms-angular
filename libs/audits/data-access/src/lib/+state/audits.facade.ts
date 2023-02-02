import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import * as fromAudits from './audits.reducer';
import * as AuditsSelectors from './audits.selectors';
import * as AuditsActions from './audits.actions';
import { ClrDatagridStateInterface } from '@clr/angular';

@Injectable()
export class AuditsFacade {
  loaded$ = this.store.pipe(select(AuditsSelectors.getAuditsLoaded));
  allAudits$ = this.store.pipe(select(AuditsSelectors.getAllAudits));
  selectedAudit$ = this.store.pipe(select(AuditsSelectors.getSelectedAudit));
  loading$ = this.store.pipe(select(AuditsSelectors.getAuditsLoadingState));
  totalAudits$ = this.store.pipe(select(AuditsSelectors.getTotalAudits));
  btnState$ = this.store.pipe(select(AuditsSelectors.getBtnState));

  constructor(private store: Store<fromAudits.AuditsPartialState>) {}

  getPaginatedAudits(state: ClrDatagridStateInterface) {
    this.store.dispatch(AuditsActions.loadAudits({ state }));
  }

  getPaginatedClientAudits(fromDate: string, state: ClrDatagridStateInterface) {
    this.store.dispatch(AuditsActions.loadClientAudits({ fromDate, state }));
  }

  getPaginatedAuditsByPerformerForPeriod(
    fromDate: string,
    username: string,
    state: ClrDatagridStateInterface
  ) {
    this.store.dispatch(
      AuditsActions.loadAuditsByPerformer({ fromDate, username, state })
    );
  }
}
