import { Injectable } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { select, Store, Action } from '@ngrx/store';

import * as CredentialsActions from './credentials.actions';
import { CredentialsEntity } from './credentials.models';
import * as CredentialsFeature from './credentials.reducer';
import * as CredentialsSelectors from './credentials.selectors';

@Injectable()
export class CredentialsFacade {
  loaded$ = this.store.pipe(select(CredentialsSelectors.getCredentialsLoaded));
  allCredentials$ = this.store.pipe(select(CredentialsSelectors.getAllCredentials));
  selectedCredential$ = this.store.pipe(select(CredentialsSelectors.getSelectedCredential));
  loading$ = this.store.pipe(select(CredentialsSelectors.getCredentialsLoadingState));
  totalCredentials$ = this.store.pipe(select(CredentialsSelectors.getTotalCredentials));
  btnState$ = this.store.pipe(select(CredentialsSelectors.getBtnState));

  constructor(private store: Store<CredentialsFeature.CredentialsPartialState>) {}

  getPaginatedCredentials(state: ClrDatagridStateInterface) {
    this.store.dispatch(CredentialsActions.getPaginatedCredentials({ state }));
  }

  getAllCredentials() {
    this.store.dispatch(CredentialsActions.getAllCredentials());
  }

  getCredential(credentialId: string | number) {
    this.store.dispatch(CredentialsActions.getCredentialById({ credentialId }));
  }

  createNewCredential(credential: CredentialsEntity) {
    this.store.dispatch(CredentialsActions.createCredential(credential));
  }

  updateCredential(credential: CredentialsEntity) {
    this.store.dispatch(CredentialsActions.updateCredential(credential));
  }
}
