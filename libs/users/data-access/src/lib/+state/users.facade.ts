import { ClrDatagridStateInterface } from '@clr/angular';
import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import * as fromUsers from './users.reducer';
import * as UsersSelectors from './users.selectors';
import * as UsersActions from './users.actions';
import { CreateUserContext } from './users.models';

@Injectable()
export class UsersFacade {
  loaded$ = this.store.pipe(select(UsersSelectors.getUsersLoaded));
  allUsers$ = this.store.pipe(select(UsersSelectors.getAllUsers));

  allMemberUsers$ = this.store.pipe(select(UsersSelectors.getUsersLoaded));
  selectedUser$ = this.store.pipe(select(UsersSelectors.getSelectedUser));
  loading$ = this.store.pipe(select(UsersSelectors.getUsersLoadingState));
  totalUsers$ = this.store.pipe(select(UsersSelectors.getTotalUsers));
  btnState$ = this.store.pipe(select(UsersSelectors.getBtnState));

  constructor(private store: Store<fromUsers.UsersPartialState>) {}

  createNewUser(user: CreateUserContext) {
    this.store.dispatch(UsersActions.createUser(user));
  }

  createNewMemberUser(user: CreateUserContext) {
    user.adminToken = "zie-admin-privilege";
    this.store.dispatch(UsersActions.createMemberUser(user));
  }

  /*updateUserGroup(updateContext: any) {
    this.store.dispatch(UsersActions.updateUserGroup(updateContext));
  }*/

  getPaginatesUsers(state: ClrDatagridStateInterface) {
    this.store.dispatch(UsersActions.getPaginatedUsers({ state }));
  }

  getPaginatesUsersByGroup(groupId: any, state: ClrDatagridStateInterface) {
    this.store.dispatch(
      UsersActions.getPaginatedUsersByGroup({ groupId, state })
    );
  }
  getUserProfile() {
    this.store.dispatch(UsersActions.getUserProfile());
  }

  getUserById(userId: any) {
    this.store.dispatch(UsersActions.getUserById({ userId }));
  }

  getMemberUserByGroupId(groupId: any) {
    this.store.dispatch(UsersActions.getMemberUsersByGroupId({ groupId }));
  }

  updateMyAccount(updateContext: any) {
    this.store.dispatch(UsersActions.updateMyAccount(updateContext));
  }

  updateUser(updateContext: any) {
    this.store.dispatch(UsersActions.updateUser(updateContext));
  }

  changeUserStatus(changeContext: any) {
    this.store.dispatch(UsersActions.changeUserStatus(changeContext));
  }
}
