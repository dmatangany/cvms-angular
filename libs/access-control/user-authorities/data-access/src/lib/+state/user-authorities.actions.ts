import { createAction, props } from '@ngrx/store';
import { UserAuthoritiesEntity } from './user-authorities.models';
import { ClrDatagridStateInterface } from '@clr/angular';

export const loadPaginatedUserAuthorities = createAction(
  '[UserAuthorities] Load Paginated User Authorities',
  props<{ userId: string | number; state: ClrDatagridStateInterface }>()
);

export const loadPaginatedUserAuthoritiesSuccess = createAction(
  '[UserAuthorities] Load Paginated User Authorities Success',
  (
    userAuthorities: UserAuthoritiesEntity[],
    total: number,
    currentPage: number
  ) => ({ userAuthorities, total, currentPage })
);

export const loadPaginatedUserAuthoritiesFailure = createAction(
  '[UserAuthorities] Load Paginated User Authorities Failure',
  props<{ error: any }>()
);

export const loadAllUserAuthorities = createAction(
  '[UserAuthorities] Load All User Authorities',
  (userId: string | number) => ({ userId })
);

export const loadAllUserAuthoritiesSuccess = createAction(
  '[UserAuthorities] Load All User Authorities Success',
  (userAuthorities: UserAuthoritiesEntity[]) => ({
    userAuthorities,
  })
);

export const loadAllUserAuthoritiesFailure = createAction(
  '[UserAuthorities] Load All User Authorities Failure',
  props<{ error: any }>()
);

export const createUserAuthorities = createAction(
  '[UserAuthorities] Create User Authorities',
  (request: any) => ({ request })
);

export const createUserAuthoritiesSuccess = createAction(
  '[UserAuthorities] Create User Authorities Success',
  (userAuthorities: UserAuthoritiesEntity[]) => ({
    userAuthorities,
  })
);

export const createUserAuthoritiesFailure = createAction(
  '[UserAuthorities] Create User Authorities Failure',
  props<{ error: any }>()
);

export const deleteUserAuthorities = createAction(
  '[UserAuthorities] Delete User Authorities',
  (userAuthorityIds: number[]) => ({
    userAuthorityIds,
  })
);

export const deleteUserAuthoritiesSuccess = createAction(
  '[UserAuthorities] Delete User Authorities Success',
  (userAuthorityIds: number[]) => ({
    userAuthorityIds,
  })
);

export const deleteUserAuthoritiesFailure = createAction(
  '[UserAuthorities] Delete User Authorities Failure',
  props<{ error: any }>()
);

export const loadAdminUnassignedUserAuthorities = createAction(
  '[UserAuthorities] Load Admin Unassigned User Authorities',
  (userId: string) => ({ userId })
);

export const loadAdminUnassignedUserAuthoritiesSuccess = createAction(
  '[UserAuthorities] Load Admin Unassigned User Authorities Success',
  (userAuthorities: UserAuthoritiesEntity[]) => ({
    userAuthorities,
  })
);

export const loadAdminUnassignedUserAuthoritiesFailure = createAction(
  '[UserAuthorities] Load Admin Unassigned User Authorities Failure',
  props<{ error: any }>()
);
