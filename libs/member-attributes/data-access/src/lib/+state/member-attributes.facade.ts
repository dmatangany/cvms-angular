import { Injectable } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { select, Store, Action } from '@ngrx/store';

import * as MemberAttributesActions from './member-attributes.actions';
import { MemberAttributesEntity } from './member-attributes.models';
import * as MemberAttributesFeature from './member-attributes.reducer';
import * as MemberAttributesSelectors from './member-attributes.selectors';

@Injectable()
export class MemberAttributesFacade {
  loaded$ = this.store.pipe(
    select(MemberAttributesSelectors.getMemberAttributesLoaded)
  );
  allMemberAttributes$ = this.store.pipe(
    select(MemberAttributesSelectors.getAllMemberAttributes)
  );
  selectedMemberAttribute$ = this.store.pipe(
    select(MemberAttributesSelectors.getSelectedMemberAttribute)
  );
  loading$ = this.store.pipe(
    select(MemberAttributesSelectors.getMemberAttributesLoadingState)
  );
  totalMemberAttributes$ = this.store.pipe(
    select(MemberAttributesSelectors.getTotalMemberAttributes)
  );
  btnState$ = this.store.pipe(select(MemberAttributesSelectors.getBtnState));

  constructor(
    private store: Store<MemberAttributesFeature.MemberAttributesPartialState>
  ) {}

  getPaginatedMemberAttributes(state: ClrDatagridStateInterface) {
    this.store.dispatch(
      MemberAttributesActions.getPaginatedMemberAttributes({ state })
    );
  }

  getAllMemberAttributes() {
    this.store.dispatch(MemberAttributesActions.getAllMemberAttributes());
  }

  getMemberAttribute(memberAttributeId: string | number) {
    this.store.dispatch(
      MemberAttributesActions.getMemberAttributeById({
        memberAttributeId,
      })
    );
  }

  getAttributeByMemberType(memberTypeId: string | number) {
    this.store.dispatch(
      MemberAttributesActions.getMemberAttributeByMemberTypeId({
        memberTypeId,
      })
    );
  }

  createNewMemberAttribute(memberAttribute: MemberAttributesEntity) {
    this.store.dispatch(
      MemberAttributesActions.createMemberAttribute(memberAttribute)
    );
  }

  updateMemberAttribute(memberAttribute: MemberAttributesEntity) {
    this.store.dispatch(
      MemberAttributesActions.updateMemberAttribute(memberAttribute)
    );
  }

  deleteMemberAttribute(memberAttributeId: string | number) {
    this.store.dispatch(
      MemberAttributesActions.deleteMemberAttribute({
        memberAttributeId,
      })
    );
  }
}
