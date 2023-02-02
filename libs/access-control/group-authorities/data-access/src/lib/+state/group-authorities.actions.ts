import { createAction, props } from '@ngrx/store';
import { ClrDatagridStateInterface } from '@clr/angular';

import { GroupAuthoritiesEntity } from './group-authorities.models';

export const loadPaginatedGroupAuthorities = createAction(
  '[GroupAuthorities] Load Paginated Group Authorities',
  props<{ groupId: string | number; state: ClrDatagridStateInterface }>()
);

export const loadPaginatedGroupAuthoritiesSuccess = createAction(
  '[GroupAuthorities] Load Paginated Group Authorities Success',
  (
    groupAuthorities: GroupAuthoritiesEntity[],
    total: number,
    currentPage: number
  ) => ({ groupAuthorities, total, currentPage })
);

export const loadPaginatedGroupAuthoritiesFailure = createAction(
  '[GroupAuthorities] Load Paginated Group Authorities Failure',
  props<{ error: any }>()
);

export const loadAllGroupAuthorities = createAction(
  '[GroupAuthorities] Load All Group Authorities',
  (groupId: string | number) => ({ groupId })
);

export const loadAllGroupAuthoritiesSuccess = createAction(
  '[GroupAuthorities] Load All Group Authorities Success',
  (groupAuthorities: GroupAuthoritiesEntity[]) => ({
    groupAuthorities,
  })
);

export const loadAllGroupAuthoritiesFailure = createAction(
  '[GroupAuthorities] Load All Group Authorities Failure',
  props<{ error: any }>()
);

export const createGroupAuthorities = createAction(
  '[GroupAuthorities] Create Group Authorities',
  (request: any) => ({
    request,
  })
);

export const createGroupAuthoritiesSuccess = createAction(
  '[GroupAuthorities] Create Group Authorities Success',
  (groupAuthorities: GroupAuthoritiesEntity[]) => ({
    groupAuthorities,
  })
);

export const createGroupAuthoritiesFailure = createAction(
  '[GroupAuthorities] Create Group Authorities Failure',
  props<{ error: any }>()
);

export const createGroupAuthoritiesBundled = createAction(
  '[GroupAuthorities] Create Group Authorities Bundled',
  (request: any) => ({
    request,
  })
);

export const createGroupAuthoritiesBundledSuccess = createAction(
  '[GroupAuthorities] Create Group Authorities Bundled Success',
  (groupAuthorities: GroupAuthoritiesEntity[]) => ({
    groupAuthorities,
  })
);

export const createGroupAuthoritiesBundledFailure = createAction(
  '[GroupAuthorities] Create Group Authorities Bundled Failure',
  props<{ error: any }>()
);

export const removeGroupAuthoritiesBundled = createAction(
  '[GroupAuthorities] Remove Group Authorities Bundled',
  (request: any) => ({
    request,
  })
);

export const removeGroupAuthoritiesBundledSuccess = createAction(
  '[GroupAuthorities]Remove Group Authorities Bundled Success',
  (groupAuthorities: GroupAuthoritiesEntity[]) => ({
    groupAuthorities,
  })
);

export const removeGroupAuthoritiesBundledFailure = createAction(
  '[GroupAuthorities] Remove Group Authorities Bundled Failure',
  props<{ error: any }>()
);

export const deleteGroupAuthorities = createAction(
  '[GroupAuthorities] Delete Group Authorities',
  (groupAuthorityIds: number[]) => ({
    groupAuthorityIds,
  })
);

export const deleteGroupAuthoritiesSuccess = createAction(
  '[GroupAuthorities] Delete Group Authorities Success',
  (groupAuthorityIds: number[]) => ({
    groupAuthorityIds,
  })
);

export const deleteGroupAuthoritiesFailure = createAction(
  '[GroupAuthorities] Delete Group Authorities Failure',
  props<{ error: any }>()
);

export const loadAdminUnassignedGroupAuthorities = createAction(
  '[GroupAuthorities] Load Admin Unassigned Group Authorities',
  (groupId: string) => ({ groupId })
);

export const loadAdminUnassignedGroupAuthoritiesSuccess = createAction(
  '[GroupAuthorities] Load Admin Unassigned Group Authorities Success',
  (groupAuthorities: GroupAuthoritiesEntity[]) => ({
    groupAuthorities,
  })
);

export const loadAdminUnassignedGroupAuthoritiesFailure = createAction(
  '[GroupAuthorities] Load Admin Unassigned Group Authorities Failure',
  props<{ error: any }>()
);
