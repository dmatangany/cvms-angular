import { ClrDatagridStateInterface } from '@clr/angular';
import { createAction, props } from '@ngrx/store';
import { MemberTypesEntity } from './member-types.models';

export const getPaginatedMemberTypes = createAction(
  '[MemberTypes] Get Paginated MemberTypes',
  props<{ state: ClrDatagridStateInterface }>()
);

export const getPaginatedMemberTypesSuccess = createAction(
  '[MemberTypes] Get Paginated MemberTypes Success',
  props<{
    memberTypes: MemberTypesEntity[];
    total: number;
    page: number;
  }>()
);

export const getPaginatedMemberTypesFailure = createAction(
  '[MemberTypes] Get Paginated MemberTypes Failure',
  props<{ error: Error }>()
);

export const createMemberType = createAction(
  '[MemberTypes] Create MemberType',
  (memberTypeDetails: MemberTypesEntity) => ({
    memberTypeDetails,
  })
);

export const createMemberTypeSuccess = createAction(
  '[MemberTypes] Create MemberType Success',
  (memberTypeDetails: MemberTypesEntity) => ({
    memberTypeDetails,
  })
);

export const createMemberTypeFailure = createAction(
  '[MemberTypes] Create MemberType Failure',
  props<{ error: Error }>()
);

export const deleteMemberType = createAction(
  '[MemberTypes] Delete MemberType',
  props<{ memberTypeId: string | number }>()
);

export const deleteMemberTypeSuccess = createAction(
  '[MemberTypes] Delete MemberType Success'
);

export const deleteMemberTypeFailure = createAction(
  '[MemberTypes] Delete MemberType Failure',
  props<{ error: Error }>()
);

export const updateMemberType = createAction(
  '[MemberTypes] Update MemberType',
  (memberTypeDetails: MemberTypesEntity) => ({
    memberTypeDetails,
  })
);

export const updateMemberTypeSuccess = createAction(
  '[MemberTypes] Update MemberType Success',
  (memberTypeDetails: MemberTypesEntity) => ({
    memberTypeDetails,
  })
);

export const updateMemberTypeFailure = createAction(
  '[MemberTypes] Update MemberType Failure',
  props<{ error: Error }>()
);

export const getMemberTypeById = createAction(
  '[MemberTypes] Get MemberType',
  props<{ memberTypeId: string | number }>()
);

export const getMemberTypeByIdSuccess = createAction(
  '[MemberTypes] Get MemberType Success',
  props<{ memberType: MemberTypesEntity }>()
);

export const getMemberTypeByIdFailure = createAction(
  '[MemberTypes] Get MemberType Failure',
  props<{ error: any }>()
);

export const getAllMemberTypes = createAction(
  '[MemberTypes] Get All MemberTypes'
);

export const getAllMemberTypesSuccess = createAction(
  '[MemberTypes] Get All MemberTypes Success',
  props<{
    memberTypes: MemberTypesEntity[];
  }>()
);

export const getAllMemberTypesFailure = createAction(
  '[MemberTypes] Get All MemberTypes Failure',
  props<{ error: Error }>()
);
