import { Injectable } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { select, Store, Action } from '@ngrx/store';

import * as MemberProfilesActions from './member-profiles.actions';
import { MemberProfilesEntity } from './member-profiles.models';
import * as MemberProfilesFeature from './member-profiles.reducer';
import * as MemberProfilesSelectors from './member-profiles.selectors';

@Injectable()
export class MemberProfilesFacade {
  loaded$ = this.store.pipe(
    select(MemberProfilesSelectors.getMemberProfilesLoaded)
  );
  allMemberProfiles$ = this.store.pipe(
    select(MemberProfilesSelectors.getAllMemberProfiles)
  );
  selectedMemberProfile$ = this.store.pipe(
    select(MemberProfilesSelectors.getSelectedMemberProfile)
  );
  loading$ = this.store.pipe(
    select(MemberProfilesSelectors.getMemberProfilesLoadingState)
  );
  totalMemberProfiles$ = this.store.pipe(
    select(MemberProfilesSelectors.getTotalMemberProfiles)
  );
  btnState$ = this.store.pipe(select(MemberProfilesSelectors.getBtnState));
  myProfileState$ = this.store.pipe(
    select(MemberProfilesSelectors.getMyMemberProfileState)
  );

  constructor(
    private store: Store<MemberProfilesFeature.MemberProfilesPartialState>
  ) {}

  getPaginatedMemberProfiles(state: ClrDatagridStateInterface) {
    this.store.dispatch(
      MemberProfilesActions.getPaginatedMemberProfiles({ state })
    );
  }

  getPaginatedMemberProfilesByMemberType(memberTypeId: any, state: ClrDatagridStateInterface) {
    this.store.dispatch(
      MemberProfilesActions.getPaginatedMemberProfilesByMemberType({ memberTypeId, state })
    );
  }

  getMemberProfileByUser(userId: any) {
    this.store.dispatch(
      MemberProfilesActions.getMemberProfileByUser({ userId })
    );
  }

  getAllMemberProfiles() {
    this.store.dispatch(MemberProfilesActions.getAllMemberProfiles());
  }

  getMemberProfile(memberProfileId: string | number) {
    this.store.dispatch(
      MemberProfilesActions.getMemberProfileById({
        memberProfileId,
      })
    );
  }

  createNewMemberProfile(memberProfile: MemberProfilesEntity) {
    this.store.dispatch(
      MemberProfilesActions.createMemberProfile(memberProfile)
    );
  }

  updateMemberProfile(memberProfile: MemberProfilesEntity) {
    this.store.dispatch(
      MemberProfilesActions.updateMemberProfile(memberProfile)
    );
  }

  getMyMemberProfile() {
    this.store.dispatch(MemberProfilesActions.getMyMemberProfile());
  }
}
