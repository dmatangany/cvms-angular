import { Injectable } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { select, Store, Action } from '@ngrx/store';

import * as MemberAccountsActions from './member-accounts.actions';
import { MemberAccountsEntity } from './member-accounts.models';
import * as MemberAccountsFeature from './member-accounts.reducer';
import * as MemberAccountsSelectors from './member-accounts.selectors';

@Injectable()
export class MemberAccountsFacade {
  loaded$ = this.store.pipe(
    select(MemberAccountsSelectors.getMemberAccountsLoaded)
  );
  allMemberAccounts$ = this.store.pipe(
    select(MemberAccountsSelectors.getAllMemberAccounts)
  );
  selectedMemberAccount$ = this.store.pipe(
    select(MemberAccountsSelectors.getSelectedMemberAccount)
  );
  loading$ = this.store.pipe(
    select(MemberAccountsSelectors.getMemberAccountsLoadingState)
  );
  totalMemberAccounts$ = this.store.pipe(
    select(MemberAccountsSelectors.getTotalMemberAccounts)
  );
  btnState$ = this.store.pipe(select(MemberAccountsSelectors.getBtnState));

  constructor(
    private store: Store<MemberAccountsFeature.MemberAccountsPartialState>
  ) {}

  getPaginatedMemberAccounts(state: ClrDatagridStateInterface) {
    this.store.dispatch(
      MemberAccountsActions.getPaginatedMemberAccounts({ state })
    );
  }

  getAllMemberAccounts() {
    this.store.dispatch(MemberAccountsActions.getAllMemberAccounts());
  }

  getMemberAccount(memberAccountId: string | number) {
    this.store.dispatch(
      MemberAccountsActions.getMemberAccountById({
        memberAccountId,
      })
    );
  }

  createNewMemberAccount(memberAccount: MemberAccountsEntity) {
    this.store.dispatch(
      MemberAccountsActions.createMemberAccount(memberAccount)
    );
  }

  updateMemberAccount(memberAccount: MemberAccountsEntity) {
    this.store.dispatch(
      MemberAccountsActions.updateMemberAccount(memberAccount)
    );
  }

  getMyMemberAccount() {
    this.store.dispatch(MemberAccountsActions.getMyMemberAccount());
  }
}
