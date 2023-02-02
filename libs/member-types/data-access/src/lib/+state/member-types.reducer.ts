import { ClrLoadingState } from '@clr/angular';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as MemberTypesActions from './member-types.actions';
import { MemberTypesEntity } from './member-types.models';

export const MEMBER_TYPES_FEATURE_KEY = 'memberTypes';

export interface MemberTypesState extends EntityState<MemberTypesEntity> {
  selectedId?: string | number;
  loaded?: boolean;
  loading: boolean;
  error?: Error;
  selectedMemberTypes: MemberTypesEntity | undefined;
  total: number;
  btnState: ClrLoadingState;
  currentPage: number;
}

export interface MemberTypesPartialState {
  readonly [MEMBER_TYPES_FEATURE_KEY]: MemberTypesState;
}

export const memberTypesAdapter: EntityAdapter<MemberTypesEntity> =
  createEntityAdapter<MemberTypesEntity>();

export const initialMemberTypesState: MemberTypesState =
  memberTypesAdapter.getInitialState({
    loaded: false,
    loading: false,
    error: undefined,
    selectedMemberTypes: undefined,
    total: 0,
    btnState: ClrLoadingState.DEFAULT,
    currentPage: 0,
  });

const reducer = createReducer(
  initialMemberTypesState,
  on(
    MemberTypesActions.getMemberTypeById,
    MemberTypesActions.getPaginatedMemberTypes,
    MemberTypesActions.getAllMemberTypes,

    (state) => ({
      ...state,
      loading: true,
    })
  ),

  on(
    MemberTypesActions.getMemberTypeByIdSuccess,

    (state, { memberType }) => ({
      ...state,
      loading: false,
      loaded: true,
      selectedMemberTypes: memberType,
    })
  ),

  on(MemberTypesActions.getAllMemberTypesSuccess, (state, { memberTypes }) =>
    memberTypesAdapter.setAll(memberTypes, {
      ...state,
      loading: false,
      loaded: true,
    })
  ),

  on(
    MemberTypesActions.getPaginatedMemberTypesSuccess,
    (state, { memberTypes, total, page }) =>
      memberTypesAdapter.setAll(memberTypes, {
        ...state,
        loading: false,
        loaded: true,
        total: total,
        currentPage: page,
      })
  ),

  on(
    MemberTypesActions.getAllMemberTypesFailure,

    MemberTypesActions.getMemberTypeByIdFailure,
    MemberTypesActions.getPaginatedMemberTypesFailure,

    (state, { error }) => ({
      ...state,
      loading: false,
      loaded: false,
      error: error,
    })
  ),

  on(
    MemberTypesActions.createMemberType,
    MemberTypesActions.updateMemberType,
    MemberTypesActions.deleteMemberType,
    (state) => ({
      ...state,
      btnState: ClrLoadingState.LOADING,
      loaded: false,
      error: undefined,
    })
  ),

  on(
    MemberTypesActions.createMemberTypeSuccess,
    MemberTypesActions.updateMemberTypeSuccess,
    MemberTypesActions.deleteMemberTypeSuccess,
    (state) => ({
      ...state,
      btnState: ClrLoadingState.LOADING,
      loaded: true,
      error: undefined,
    })
  ),

  on(
    MemberTypesActions.createMemberTypeFailure,
    MemberTypesActions.updateMemberTypeFailure,
    MemberTypesActions.deleteMemberTypeFailure,
    (state, { error }) => ({
      ...state,
      error,
      loaded: false,
      btnState: ClrLoadingState.ERROR,
    })
  )
);

export function memberTypesReducer(
  state: MemberTypesState | undefined,
  action: Action
) {
  return reducer(state, action);
}
