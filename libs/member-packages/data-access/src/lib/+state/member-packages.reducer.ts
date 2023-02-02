import { ClrLoadingState } from '@clr/angular';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as MemberPackagesActions from './member-packages.actions';
import { MemberPackageEntity } from './member-packages.models';

export const MEMBER_PACKAGES_FEATURE_KEY = 'memberPackages';

export interface MemberPackagesState extends EntityState<MemberPackageEntity> {
  selectedId?: string | number;
  loaded?: boolean;
  loading: boolean;
  error?: Error;
  selectedMemberPackages: MemberPackageEntity | undefined;
  total: number;
  btnState: ClrLoadingState;
  currentPage: number;
}

export interface MemberPackagesPartialState {
  readonly [MEMBER_PACKAGES_FEATURE_KEY]: MemberPackagesState;
}

export const memberPackagesAdapter: EntityAdapter<MemberPackageEntity> =
  createEntityAdapter<MemberPackageEntity>();

export const initialMemberPackagesState: MemberPackagesState =
  memberPackagesAdapter.getInitialState({
    loaded: false,
    loading: false,
    error: undefined,
    selectedMemberPackages: undefined,
    total: 0,
    btnState: ClrLoadingState.DEFAULT,
    currentPage: 0,
  });

const reducer = createReducer(
  initialMemberPackagesState,
  on(
    MemberPackagesActions.getMemberPackageById,
    MemberPackagesActions.getPaginatedMemberPackages,
    MemberPackagesActions.getAllMemberPackages,
    MemberPackagesActions.getAllMemberPackagesByMemberType,

    (state) => ({
      ...state,
      loading: true,
    })
  ),

  on(
    MemberPackagesActions.getMemberPackageByIdSuccess,

    (state, { memberPackage }) => ({
      ...state,
      loading: false,
      loaded: true,
      selectedMemberPackages: memberPackage,
    })
  ),

  on(
    MemberPackagesActions.getAllMemberPackagesSuccess,
    MemberPackagesActions.getAllMemberPackagesByMemberTypeSuccess,
    (state, { memberPackages }) =>
      memberPackagesAdapter.setAll(memberPackages, {
        ...state,
        loading: false,
        loaded: true,
      })
  ),

  on(
    MemberPackagesActions.getPaginatedMemberPackagesSuccess,

    (state, { memberPackages, total, page }) =>
      memberPackagesAdapter.setAll(memberPackages, {
        ...state,
        loading: false,
        loaded: true,
        total: total,
        currentPage: page,
      })
  ),

  on(
    MemberPackagesActions.getAllMemberPackagesFailure,
    MemberPackagesActions.getAllMemberPackagesByMemberTypeFailure,
    MemberPackagesActions.getMemberPackageByIdFailure,
    MemberPackagesActions.getPaginatedMemberPackagesFailure,

    (state, { error }) => ({
      ...state,
      loading: false,
      loaded: false,
      error: error,
    })
  ),

  on(
    MemberPackagesActions.createMemberPackage,
    MemberPackagesActions.updateMemberPackage,
    MemberPackagesActions.deleteMemberPackage,
    (state) => ({
      ...state,
      btnState: ClrLoadingState.LOADING,
      loaded: false,
      error: undefined,
    })
  ),

  on(
    MemberPackagesActions.createMemberPackageSuccess,
    MemberPackagesActions.updateMemberPackageSuccess,
    MemberPackagesActions.deleteMemberPackageSuccess,
    (state) => ({
      ...state,
      btnState: ClrLoadingState.LOADING,
      loaded: true,
      error: undefined,
    })
  ),

  on(
    MemberPackagesActions.createMemberPackageFailure,
    MemberPackagesActions.updateMemberPackageFailure,
    MemberPackagesActions.deleteMemberPackageFailure,
    (state, { error }) => ({
      ...state,
      error,
      btnState: ClrLoadingState.ERROR,
    })
  )
);

export function memberPackagesReducer(
  state: MemberPackagesState | undefined,
  action: Action
) {
  return reducer(state, action);
}
