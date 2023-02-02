import { ClrDatagridStateInterface } from '@clr/angular';
import { createAction, props } from '@ngrx/store';
import { MemberAttributesEntity } from './member-attributes.models';

export const getPaginatedMemberAttributes = createAction(
  '[MemberAttributes] Get Paginated MemberAttributes',
  props<{ state: ClrDatagridStateInterface }>()
);

export const getPaginatedMemberAttributesSuccess = createAction(
  '[MemberAttributes] Get Paginated MemberAttributes Success',
  props<{
    memberAttributes: MemberAttributesEntity[];
    total: number;
    page: number;
  }>()
);

export const getPaginatedMemberAttributesFailure = createAction(
  '[MemberAttributes] Get Paginated MemberAttributes Failure',
  props<{ error: Error }>()
);

export const createMemberAttribute = createAction(
  '[MemberAttributes] Create MemberAttribute',
  (memberAttributeDetails: MemberAttributesEntity) => ({
    memberAttributeDetails,
  })
);

export const createMemberAttributeSuccess = createAction(
  '[MemberAttributes] Create MemberAttribute Success',
  (memberAttributeDetails: MemberAttributesEntity) => ({
    memberAttributeDetails,
  })
);

export const createMemberAttributeFailure = createAction(
  '[MemberAttributes] Create MemberAttribute Failure',
  props<{ error: Error }>()
);

export const deleteMemberAttribute = createAction(
  '[MemberAttributes] Delete MemberAttribute',
  props<{ memberAttributeId: string | number }>()
);

export const deleteMemberAttributeSuccess = createAction(
  '[MemberAttributes] Delete MemberAttribute Success'
);

export const deleteMemberAttributeFailure = createAction(
  '[MemberAttributes] Delete MemberAttribute Failure',
  props<{ error: Error }>()
);

export const updateMemberAttribute = createAction(
  '[MemberAttributes] Update MemberAttribute',
  (memberAttributeDetails: MemberAttributesEntity) => ({
    memberAttributeDetails,
  })
);

export const updateMemberAttributeSuccess = createAction(
  '[MemberAttributes] Update MemberAttribute Success',
  (memberAttributeDetails: MemberAttributesEntity) => ({
    memberAttributeDetails,
  })
);

export const updateMemberAttributeFailure = createAction(
  '[MemberAttributes] Update MemberAttribute Failure',
  props<{ error: Error }>()
);

export const getMemberAttributeById = createAction(
  '[MemberAttributes] Get MemberAttribute',
  props<{ memberAttributeId: string | number }>()
);

export const getMemberAttributeByIdSuccess = createAction(
  '[MemberAttributes] Get MemberAttribute Success',
  props<{ memberAttribute: MemberAttributesEntity }>()
);

export const getMemberAttributeByIdFailure = createAction(
  '[MemberAttributes] Get MemberAttribute Failure',
  props<{ error: any }>()
);

export const getMemberAttributeByMemberTypeId = createAction(
  '[MemberAttributes] Get MemberAttribute By Member Type',
  props<{ memberTypeId: string | number }>()
);

export const getMemberAttributeByMemberTypeIdSuccess = createAction(
  '[MemberAttributes] Get MemberAttribute By Member Type Success',
  props<{ memberAttributes: MemberAttributesEntity[] }>()
);

export const getMemberAttributeByMemberTypeIdFailure = createAction(
  '[MemberAttributes] Get MemberAttribute By Member Type Failure',
  props<{ error: any }>()
);

export const getAllMemberAttributes = createAction(
  '[MemberAttributes] Get All MemberAttributes'
);

export const getAllMemberAttributesSuccess = createAction(
  '[MemberAttributes] Get All MemberAttributes Success',
  props<{
    memberAttributes: MemberAttributesEntity[];
  }>()
);

export const getAllMemberAttributesFailure = createAction(
  '[MemberAttributes] Get All MemberAttributes Failure',
  props<{ error: Error }>()
);
