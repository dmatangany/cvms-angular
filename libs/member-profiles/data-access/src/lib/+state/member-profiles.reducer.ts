import { ClrLoadingState } from '@clr/angular';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as MemberProfilesActions from './member-profiles.actions';
import { MemberProfilesEntity } from './member-profiles.models';

export const MEMBER_PROFILES_FEATURE_KEY = 'memberProfiles';

export interface MemberProfilesState extends EntityState<MemberProfilesEntity> {
  selectedId?: string | number;
  loaded?: boolean;
  loading: boolean;
  error?: Error;
  selectedMemberProfiles: MemberProfilesEntity | undefined;
  total: number;
  btnState: ClrLoadingState;
  currentPage: number;
  myMemberProfile: MemberProfilesEntity | undefined;
}

export interface MemberProfilesPartialState {
  readonly [MEMBER_PROFILES_FEATURE_KEY]: MemberProfilesState;
}

export const memberProfilesAdapter: EntityAdapter<MemberProfilesEntity> =
  createEntityAdapter<MemberProfilesEntity>();

export const initialMemberProfilesState: MemberProfilesState =
  memberProfilesAdapter.getInitialState({
    loaded: false,
    loading: false,
    error: undefined,
    selectedMemberProfiles: undefined,
    total: 0,
    btnState: ClrLoadingState.DEFAULT,
    currentPage: 0,
    myMemberProfile: undefined,
  });

const reducer = createReducer(
  initialMemberProfilesState,
  on(
    MemberProfilesActions.getMemberProfileById,
    MemberProfilesActions.getPaginatedMemberProfiles,
	  MemberProfilesActions.getPaginatedMemberProfilesByMemberType,
    MemberProfilesActions.getMemberProfileByUser,
    MemberProfilesActions.getAllMemberProfiles,
    MemberProfilesActions.getMyMemberProfile,

    (state) => ({
      ...state,
      loading: true,
    })
  ),

  on(
    MemberProfilesActions.getMemberProfileByIdSuccess,
    (state, { memberProfile }) => ({
      ...state,
      loading: false,
      loaded: true,
      selectedMemberProfiles: memberProfile,
    })
  ),

  on(
    MemberProfilesActions.getMyMemberProfileSuccess,
    (state, { memberProfile }) => ({
      ...state,
      loading: false,
      loaded: true,
      myMemberProfile: memberProfile,
    })
  ),

  on(
    MemberProfilesActions.getAllMemberProfilesSuccess,
    (state, { memberProfiles }) =>
      memberProfilesAdapter.setAll(memberProfiles, {
        ...state,
        loading: false,
        loaded: true,
      })
  ),

  on(
    MemberProfilesActions.getPaginatedMemberProfilesSuccess,
    (state, { memberProfiles, total, page }) =>
      memberProfilesAdapter.setAll(memberProfiles, {
        ...state,
        loading: false,
        loaded: true,
        total: total,
        currentPage: page,
      })
  ),

  on(
    MemberProfilesActions.getPaginatedMemberProfilesByMemberTypeSuccess,
    MemberProfilesActions.getMemberProfileByUserSuccess,
    (state, { memberProfiles, total, page }) =>
      memberProfilesAdapter.setAll(memberProfiles, {
        ...state,
        loading: false,
        loaded: true,
        total: total,
        currentPage: page,
      })
  ),

  on(
    MemberProfilesActions.getAllMemberProfilesFailure,
    MemberProfilesActions.getMyMemberProfileFailure,
    MemberProfilesActions.getMemberProfileByIdFailure,
    MemberProfilesActions.getPaginatedMemberProfilesFailure,
    MemberProfilesActions.getPaginatedMemberProfilesByMemberTypeFailure,
    MemberProfilesActions.getMemberProfileByUserFailure,
    (state, { error }) => ({
      ...state,
      loading: false,
      loaded: false,
      error: error,
    })
  ),

  on(
    MemberProfilesActions.createMemberProfile,
    MemberProfilesActions.updateMemberProfile,

    (state) => ({
      ...state,
      btnState: ClrLoadingState.LOADING,
      loaded: false,
      error: undefined,
    })
  ),

  on(
    MemberProfilesActions.createMemberProfileSuccess,
    MemberProfilesActions.updateMemberProfileSuccess,

    (state) => ({
      ...state,
      btnState: ClrLoadingState.LOADING,
      loaded: true,
      error: undefined,
    })
  ),

  on(
    MemberProfilesActions.createMemberProfileFailure,
    MemberProfilesActions.updateMemberProfileFailure,

    (state, { error }) => ({
      ...state,
      error,
      btnState: ClrLoadingState.ERROR,
    })
  )
);

export function memberProfilesReducer(
  state: MemberProfilesState | undefined,
  action: Action
) {
  return reducer(state, action);
}
