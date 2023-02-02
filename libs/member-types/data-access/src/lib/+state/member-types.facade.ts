import { Injectable } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { select, Store, Action } from '@ngrx/store';

import * as MemberTypesActions from './member-types.actions';
import { MemberTypesEntity } from './member-types.models';
import * as MemberTypesFeature from './member-types.reducer';
import * as MemberTypesSelectors from './member-types.selectors';

@Injectable()
export class MemberTypesFacade {
  loaded$ = this.store.pipe(select(MemberTypesSelectors.getMemberTypesLoaded));
  allMemberTypes$ = this.store.pipe(
    select(MemberTypesSelectors.getAllMemberTypes)
  );
  selectedMemberType$ = this.store.pipe(
    select(MemberTypesSelectors.getSelectedMemberType)
  );
  loading$ = this.store.pipe(
    select(MemberTypesSelectors.getMemberTypesLoadingState)
  );
  totalMemberTypes$ = this.store.pipe(
    select(MemberTypesSelectors.getTotalMemberTypes)
  );
  btnState$ = this.store.pipe(select(MemberTypesSelectors.getBtnState));

  constructor(
    private store: Store<MemberTypesFeature.MemberTypesPartialState>
  ) {}

  getPaginatedMemberTypes(state: ClrDatagridStateInterface) {
    this.store.dispatch(MemberTypesActions.getPaginatedMemberTypes({ state }));
  }

  getAllMemberTypes() {
    this.store.dispatch(MemberTypesActions.getAllMemberTypes());
  }

  getMemberType(memberTypeId: string | number) {
    this.store.dispatch(
      MemberTypesActions.getMemberTypeById({
        memberTypeId,
      })
    );
  }

  createNewMemberType(memberType: MemberTypesEntity) {
    this.store.dispatch(MemberTypesActions.createMemberType(memberType));
  }

  updateMemberType(memberType: MemberTypesEntity) {
    this.store.dispatch(MemberTypesActions.updateMemberType(memberType));
  }

  deleteMemberType(memberTypeId: string | number) {
    this.store.dispatch(
      MemberTypesActions.deleteMemberType({
        memberTypeId,
      })
    );
  }
}
