import { ClrDatagridStateInterface } from '@clr/angular';
import { createAction, props } from '@ngrx/store';
import { MemberPackageEntity } from './member-packages.models';

export const getPaginatedMemberPackages = createAction(
  '[MemberPackages] Get Paginated MemberPackages',
  props<{ state: ClrDatagridStateInterface }>()
);

export const getPaginatedMemberPackagesSuccess = createAction(
  '[MemberPackages] Get Paginated MemberPackages Success',
  props<{
    memberPackages: MemberPackageEntity[];
    total: number;
    page: number;
  }>()
);

export const getPaginatedMemberPackagesFailure = createAction(
  '[MemberPackages] Get Paginated MemberPackages Failure',
  props<{ error: Error }>()
);

export const createMemberPackage = createAction(
  '[MemberPackages] Create MemberPackage',
  (memberPackageDetails: MemberPackageEntity) => ({
    memberPackageDetails,
  })
);

export const createMemberPackageSuccess = createAction(
  '[MemberPackages] Create MemberPackage Success',
  (memberPackageDetails: MemberPackageEntity) => ({
    memberPackageDetails,
  })
);

export const createMemberPackageFailure = createAction(
  '[MemberPackages] Create MemberPackage Failure',
  props<{ error: Error }>()
);

export const deleteMemberPackage = createAction(
  '[MemberPackages] Delete MemberPackage',
  props<{ memberPackageId: string | number }>()
);

export const deleteMemberPackageSuccess = createAction(
  '[MemberPackages] Delete MemberPackage Success'
);

export const deleteMemberPackageFailure = createAction(
  '[MemberPackages] Delete MemberPackage Failure',
  props<{ error: Error }>()
);

export const updateMemberPackage = createAction(
  '[MemberPackages] Update MemberPackage',
  (memberPackageDetails: MemberPackageEntity) => ({
    memberPackageDetails,
  })
);

export const updateMemberPackageSuccess = createAction(
  '[MemberPackages] Update MemberPackage Success',
  (memberPackageDetails: MemberPackageEntity) => ({
    memberPackageDetails,
  })
);

export const updateMemberPackageFailure = createAction(
  '[MemberPackages] Update MemberPackage Failure',
  props<{ error: Error }>()
);

export const getMemberPackageById = createAction(
  '[MemberPackages] Get MemberPackage',
  props<{ memberPackageId: string | number }>()
);

export const getMemberPackageByIdSuccess = createAction(
  '[MemberPackages] Get MemberPackage Success',
  props<{ memberPackage: MemberPackageEntity }>()
);

export const getMemberPackageByIdFailure = createAction(
  '[MemberPackages] Get MemberPackage Failure',
  props<{ error: any }>()
);

export const getAllMemberPackages = createAction(
  '[MemberPackages] Get All MemberPackages'
);

export const getAllMemberPackagesSuccess = createAction(
  '[MemberPackages] Get All MemberPackages Success',
  props<{
    memberPackages: MemberPackageEntity[];
  }>()
);

export const getAllMemberPackagesFailure = createAction(
  '[MemberPackages] Get All MemberPackages Failure',
  props<{ error: Error }>()
);

export const getAllMemberPackagesByMemberType = createAction(
  '[MemberPackages] Get All MemberPackages ByMemberType',
  props<{
    memberTypeId: any;
  }>()
);

export const getAllMemberPackagesByMemberTypeSuccess = createAction(
  '[MemberPackages] Get All MemberPackages ByMemberType Success',
  props<{
    memberPackages: MemberPackageEntity[];
  }>()
);

export const getAllMemberPackagesByMemberTypeFailure = createAction(
  '[MemberPackages] Get All MemberPackages ByMemberType Failure',
  props<{ error: Error }>()
);
