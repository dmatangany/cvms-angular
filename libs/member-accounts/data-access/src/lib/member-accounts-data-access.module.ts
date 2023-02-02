import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromMemberAccounts from './+state/member-accounts.reducer';
import { MemberAccountsEffects } from './+state/member-accounts.effects';
import { MemberAccountsFacade } from './+state/member-accounts.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromMemberAccounts.MEMBER_ACCOUNTS_FEATURE_KEY,
      fromMemberAccounts.memberAccountsReducer
    ),
    EffectsModule.forFeature([MemberAccountsEffects]),
  ],
  providers: [MemberAccountsFacade],
})
export class MemberAccountsDataAccessModule {}
