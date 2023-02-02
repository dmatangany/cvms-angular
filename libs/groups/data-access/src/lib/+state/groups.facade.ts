import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import * as fromGroups from './groups.reducer';
import * as GroupsSelectors from './groups.selectors';
import * as GroupsActions from './groups.actions';
import { ClrDatagridStateInterface } from '@clr/angular';
import { GroupsEntity } from './groups.models';

@Injectable()
export class GroupsFacade {
  loaded$ = this.store.pipe(select(GroupsSelectors.getGroupsLoaded));
  allGroups$ = this.store.pipe(select(GroupsSelectors.getAllGroups));
  selectedGroup$ = this.store.pipe(select(GroupsSelectors.getSelectedGroup));
  loading$ = this.store.pipe(select(GroupsSelectors.getGroupsLoadingState));
  totalGroups$ = this.store.pipe(select(GroupsSelectors.getTotalGroups));
  btnState$ = this.store.pipe(select(GroupsSelectors.getBtnState));

  constructor(private store: Store<fromGroups.GroupsPartialState>) {}

  getPaginatedGroups(state: ClrDatagridStateInterface) {
    this.store.dispatch(GroupsActions.getPaginatedGroups({ state }));
  }

  getAllGroups() {
    this.store.dispatch(GroupsActions.getAllGroups());
  }

  getGroup(groupId: string | number) {
    this.store.dispatch(GroupsActions.getGroupById({ groupId }));
  }

  createNewGroup(group: GroupsEntity) {
    this.store.dispatch(GroupsActions.createGroup(group));
  }

  updateGroup(group: GroupsEntity) {
    this.store.dispatch(GroupsActions.updateGroup(group));
  }
}
