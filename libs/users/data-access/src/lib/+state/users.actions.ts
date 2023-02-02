import { ClrDatagridStateInterface } from '@clr/angular';
import { createAction, props } from '@ngrx/store';
import { UsersEntity, CreateUserContext } from './users.models';

export const getPaginatedUsers = createAction(
  '[User Manager/Users] Get Paginated Users',
  props<{ state: ClrDatagridStateInterface }>()
);

export const getPaginatedUsersSuccess = createAction(
  '[User Manager/Users] Get Paginated Users Success',
  props<{ users: UsersEntity[]; total: number; page: number }>()
);

export const getPaginatedUsersFailure = createAction(
  '[User Manager/Users] Get Paginated Users Failure',
  props<{ error: Error }>()
);

export const getPaginatedUsersByGroup = createAction(
  '[User Manager/Users] Get Paginated Users ByGroup',
  props<{ groupId: any; state: ClrDatagridStateInterface }>()
);

export const getPaginatedUsersByGroupSuccess = createAction(
  '[User Manager/Users] Get Paginated Users ByGroup Success',
  props<{ users: UsersEntity[]; total: number; page: number }>()
);

export const getPaginatedUsersByGroupFailure = createAction(
  '[User Manager/Users] Get Paginated Users ByGroup Failure',
  props<{ error: Error }>()
);

export const getAllUsers = createAction('[User Manager/Users] Get All Users');

export const getAllUsersSuccess = createAction(
  '[User Manager/Users] Get All Users Success',
  props<{ users: UsersEntity[] }>()
);

export const getAllUsersFailure = createAction(
  '[User Manager/Users] Get All Users Failure',
  props<{ error: Error }>()
);

export const createUser = createAction(
  '[Users] Create User',
  (userDetails: CreateUserContext) => ({ userDetails })
);

export const createUserSuccess = createAction(
  '[Users] Create User Success',
  (user: UsersEntity) => ({ user })
);

export const createUserFailure = createAction(
  '[Users] Create User Failure',
  props<{ error: Error }>()
);

export const updateUser = createAction(
  '[Users] Update User',
  (userDetails: any) => ({ userDetails })
);

export const updateUserSuccess = createAction(
  '[Users]Update User Success',
  (user: UsersEntity) => ({ user })
);

export const updateUserFailure = createAction(
  '[Users] Update User Failure',
  props<{ error: Error }>()
);

export const getUserProfile = createAction('[Users]Get User Profile');

export const getUserProfileSuccess = createAction(
  '[Users] Get User Profile Success',
  (user: UsersEntity) => ({ user })
);

export const getUserProfileFailure = createAction(
  '[Users] Get User Profile Failure',
  props<{ error: Error }>()
);

export const getUserById = createAction(
  '[Users] Get Client User By Id',
  props<{ userId: any }>()
);

export const getUserByIdSuccess = createAction(
  '[Users] Get Client User By Id Success',
  (user: UsersEntity) => ({ user })
);

export const getUserByIdFailure = createAction(
  '[Users] Get Client User By Id Failure',
  props<{ error: Error }>()
);

export const updateMyAccount = createAction(
  '[Users]Update My Account',
  (updateContext: any) => ({ updateContext })
);

export const updateMyAccountSuccess = createAction(
  '[Users] Update My Account Success',
  (user: UsersEntity) => ({ user })
);

export const updateMyAccountFailure = createAction(
  '[Users] Update My Account Failure',
  props<{ error: Error }>()
);

export const updateUserUser = createAction(
  '[Users]Update User User',
  (updateContext: any) => ({ updateContext })
);

export const updateUserUserSuccess = createAction(
  '[Users] Update User User Success',
  (user: UsersEntity) => ({ user })
);

export const updateUserUserFailure = createAction(
  '[Users] Update User User  Failure',
  props<{ error: Error }>()
);

export const changeUserStatus = createAction(
  '[Users]Change User Status',
  (changeContext: any) => ({ changeContext })
);

export const changeUserStatusSuccess = createAction(
  '[Users] Change User Status Success',
  (user: UsersEntity) => ({ user })
);

export const changeUserStatusFailure = createAction(
  '[Users] Change User  Status Failure',
  props<{ error: Error }>()
);

export const getMemberUsersByGroupId = createAction(
  '[Users] Get Member Users By Group Id',
  props<{ groupId: any }>()
);

export const getMemberUsersByGroupIdSuccess = createAction(
  '[Users] Get Member Users By Group Id Success',
  (user: UsersEntity) => ({ user })
);

export const getMemberUsersByGroupIdFailure = createAction(
  '[Users] Get Member Users By Group Id Failure',
  props<{ error: Error }>()
);

export const createMemberUser = createAction(
  '[Users] Create Member User',
  (userDetails: CreateUserContext) => ({ userDetails })
);

export const createMemberUserSuccess = createAction(
  '[Users] Create Member User Success',
  (user: UsersEntity) => ({ user })
);

export const createMemberUserFailure = createAction(
  '[Users] Create Member User Failure',
  props<{ error: Error }>()
);
