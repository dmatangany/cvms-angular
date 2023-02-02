import { ClrDatagridStateInterface } from '@clr/angular';
import { createAction, props } from '@ngrx/store';
import { MemberAccountsEntity } from './member-accounts.models';

export const getPaginatedMemberAccounts = createAction(
  '[MemberAccounts] Get Paginated MemberAccounts',
  props<{ state: ClrDatagridStateInterface }>()
);

export const getPaginatedMemberAccountsSuccess = createAction(
  '[MemberAccounts] Get Paginated MemberAccounts Success',
  props<{
    memberAccounts: MemberAccountsEntity[];
    total: number;
    page: number;
  }>()
);

export const getPaginatedMemberAccountsFailure = createAction(
  '[MemberAccounts] Get Paginated MemberAccounts Failure',
  props<{ error: Error }>()
);

export const createMemberAccount = createAction(
  '[MemberAccounts] Create MemberAccount',
  (memberAccountDetails: MemberAccountsEntity) => ({
    memberAccountDetails,
  })
);

export const createMemberAccountSuccess = createAction(
  '[MemberAccounts] Create MemberAccount Success',
  (memberAccountDetails: MemberAccountsEntity) => ({
    memberAccountDetails,
  })
);

export const createMemberAccountFailure = createAction(
  '[MemberAccounts] Create MemberAccount Failure',
  props<{ error: Error }>()
);

export const getMyMemberAccount = createAction(
  '[MemberAccounts] get My MemberAccount'
);

export const getMyMemberAccountSuccess = createAction(
  '[MemberAccounts] get My MemberAccount Success',
  props<{ memberAccount: MemberAccountsEntity }>()
);

export const getMyMemberAccountFailure = createAction(
  '[MemberAccounts] get My MemberAccount Failure',
  props<{ error: Error }>()
);

export const updateMemberAccount = createAction(
  '[MemberAccounts] Update MemberAccount',
  (memberAccountDetails: MemberAccountsEntity) => ({
    memberAccountDetails,
  })
);

export const updateMemberAccountSuccess = createAction(
  '[MemberAccounts] Update MemberAccount Success',
  (memberAccountDetails: MemberAccountsEntity) => ({
    memberAccountDetails,
  })
);

export const updateMemberAccountFailure = createAction(
  '[MemberAccounts] Update MemberAccount Failure',
  props<{ error: Error }>()
);

export const getMemberAccountById = createAction(
  '[MemberAccounts] Get MemberAccount',
  props<{ memberAccountId: string | number }>()
);

export const getMemberAccountByIdSuccess = createAction(
  '[MemberAccounts] Get MemberAccount Success',
  props<{ memberAccount: MemberAccountsEntity }>()
);

export const getMemberAccountByIdFailure = createAction(
  '[MemberAccounts] Get MemberAccount Failure',
  props<{ error: any }>()
);

export const getAllMemberAccounts = createAction(
  '[MemberAccounts] Get All MemberAccounts'
);

export const getAllMemberAccountsSuccess = createAction(
  '[MemberAccounts] Get All MemberAccounts Success',
  props<{
    memberAccounts: MemberAccountsEntity[];
  }>()
);

export const getAllMemberAccountsFailure = createAction(
  '[MemberAccounts] Get All MemberAccounts Failure',
  props<{ error: Error }>()
);
