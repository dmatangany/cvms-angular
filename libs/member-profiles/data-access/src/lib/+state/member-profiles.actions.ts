import { ClrDatagridStateInterface } from '@clr/angular';
import { createAction, props } from '@ngrx/store';
import {MemberProfileRequestEntity, MemberProfilesEntity} from './member-profiles.models';

export const getPaginatedMemberProfiles = createAction(
  '[MemberProfiles] Get Paginated MemberProfiles',
  props<{ state: ClrDatagridStateInterface }>()
);

export const getPaginatedMemberProfilesSuccess = createAction(
  '[MemberProfiles] Get Paginated MemberProfiles Success',
  props<{
    memberProfiles: MemberProfilesEntity[];
    total: number;
    page: number;
  }>()
);

export const getPaginatedMemberProfilesFailure = createAction(
  '[MemberProfiles] Get Paginated MemberProfiles Failure',
  props<{ error: Error }>()
);

export const getPaginatedMemberProfilesByMemberType = createAction(
  '[User Manager/MemberProfiles] Get Paginated MemberProfiles By MemberType',
  props<{ memberTypeId: any; state: ClrDatagridStateInterface }>()
);

export const getPaginatedMemberProfilesByMemberTypeSuccess = createAction(
  '[User Manager/MemberProfiles] Get Paginated MemberProfiles  By MemberType Success',
  props<{ memberProfiles: MemberProfilesEntity[]; total: number; page: number }>()
);

export const getPaginatedMemberProfilesByMemberTypeFailure = createAction(
  '[User Manager/MemberProfiles] Get Paginated MemberProfiles  By MemberType Failure',
  props<{ error: Error }>()
);

export const getMemberProfileByUser = createAction(
  '[User Manager/MemberProfiles] Get MemberProfiles By User',
  props<{ userId: string | number }>()
);

export const getMemberProfileByUserSuccess = createAction(
  '[User Manager/MemberProfiles] Get MemberProfiles By User Success',
  props<{ memberProfiles: MemberProfilesEntity[]; total: number; page: number }>()
);

export const getMemberProfileByUserFailure = createAction(
  '[User Manager/MemberProfiles] Get MemberProfiles By User Failure',
  props<{ error: Error }>()
);
export const createMemberProfile = createAction(
  '[MemberProfiles] Create MemberProfile',
  (memberProfileDetails: MemberProfilesEntity) => ({
    memberProfileDetails,
  })
);

export const createMemberProfileSuccess = createAction(
  '[MemberProfiles] Create MemberProfile Success',
  (memberProfileDetails: MemberProfilesEntity) => ({
    memberProfileDetails,
  })
);

export const createMemberProfileFailure = createAction(
  '[MemberProfiles] Create MemberProfile Failure',
  props<{ error: Error }>()
);

export const createMemberPayment = createAction(
  '[MemberPayments] Create MemberPayment',
  (memberPaymentDetails: MemberProfileRequestEntity) => ({
    memberPaymentDetails,
  })
);

export const createMemberPaymentSuccess = createAction(
  '[MemberPayments] Create MemberPayment Success',
  (memberPaymentDetails: MemberProfileRequestEntity) => ({
    memberPaymentDetails,
  })
);

export const createMemberPaymentFailure = createAction(
  '[MemberPayments] Create MemberPayment Failure',
  props<{ error: Error }>()
);

export const getMyMemberProfile = createAction(
  '[MemberProfiles] GetMy MemberProfile'
);

export const getMyMemberProfileSuccess = createAction(
  '[MemberProfiles] GetMy MemberProfile Success',
  props<{ memberProfile: MemberProfilesEntity }>()
);

export const getMyMemberProfileFailure = createAction(
  '[MemberProfiles] GetMy MemberProfile Failure',
  props<{ error: Error }>()
);

export const updateMemberProfile = createAction(
  '[MemberProfiles] Update MemberProfile',
  (memberProfileDetails: MemberProfilesEntity) => ({
    memberProfileDetails,
  })
);

export const updateMemberProfileSuccess = createAction(
  '[MemberProfiles] Update MemberProfile Success',
  (memberProfileDetails: MemberProfilesEntity) => ({
    memberProfileDetails,
  })
);

export const updateMemberProfileFailure = createAction(
  '[MemberProfiles] Update MemberProfile Failure',
  props<{ error: Error }>()
);

export const getMemberProfileById = createAction(
  '[MemberProfiles] Get MemberProfile',
  props<{ memberProfileId: string | number }>()
);

export const getMemberProfileByIdSuccess = createAction(
  '[MemberProfiles] Get MemberProfile Success',
  props<{ memberProfile: MemberProfilesEntity }>()
);

export const getMemberProfileByIdFailure = createAction(
  '[MemberProfiles] Get MemberProfile Failure',
  props<{ error: any }>()
);

export const getAllMemberProfiles = createAction(
  '[MemberProfiles] Get All MemberProfiles'
);

export const getAllMemberProfilesSuccess = createAction(
  '[MemberProfiles] Get All MemberProfiles Success',
  props<{
    memberProfiles: MemberProfilesEntity[];
  }>()
);

export const getAllMemberProfilesFailure = createAction(
  '[MemberProfiles] Get All MemberProfiles Failure',
  props<{ error: Error }>()
);
