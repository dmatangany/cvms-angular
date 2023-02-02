import { ClrLoadingState } from '@clr/angular';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as MemberAttributesActions from './member-attributes.actions';
import { MemberAttributesEntity } from './member-attributes.models';

export const MEMBER_ATTRIBUTES_FEATURE_KEY = 'memberAttributes';

export interface MemberAttributesState
  extends EntityState<MemberAttributesEntity> {
  selectedId?: string | number;
  loaded?: boolean;
  loading: boolean;
  error?: Error;
  selectedMemberAttributes: MemberAttributesEntity | undefined;
  total: number;
  btnState: ClrLoadingState;
  currentPage: number;
}

export interface MemberAttributesPartialState {
  readonly [MEMBER_ATTRIBUTES_FEATURE_KEY]: MemberAttributesState;
}

export const memberAttributesAdapter: EntityAdapter<MemberAttributesEntity> =
  createEntityAdapter<MemberAttributesEntity>();

export const initialMemberAttributesState: MemberAttributesState =
  memberAttributesAdapter.getInitialState({
    loaded: false,
    loading: false,
    error: undefined,
    selectedMemberAttributes: undefined,
    total: 0,
    btnState: ClrLoadingState.DEFAULT,
    currentPage: 0,
  });

const reducer = createReducer(
  initialMemberAttributesState,
  on(
    MemberAttributesActions.getMemberAttributeById,
    MemberAttributesActions.getPaginatedMemberAttributes,
    MemberAttributesActions.getAllMemberAttributes,
    MemberAttributesActions.getMemberAttributeByMemberTypeId,

    (state) => ({
      ...state,
      loading: true,
    })
  ),

  on(
    MemberAttributesActions.getMemberAttributeByIdSuccess,

    (state, { memberAttribute }) => ({
      ...state,
      loading: false,
      loaded: true,
      selectedMemberAttributes: memberAttribute,
    })
  ),

  on(
    MemberAttributesActions.getAllMemberAttributesSuccess,
    MemberAttributesActions.getMemberAttributeByMemberTypeIdSuccess,
    (state, { memberAttributes }) =>
      memberAttributesAdapter.setAll(memberAttributes, {
        ...state,
        loading: false,
        loaded: true,
      })
  ),

  on(
    MemberAttributesActions.getPaginatedMemberAttributesSuccess,
    (state, { memberAttributes, total, page }) =>
      memberAttributesAdapter.setAll(memberAttributes, {
        ...state,
        loading: false,
        loaded: true,
        total: total,
        currentPage: page,
      })
  ),

  on(
    MemberAttributesActions.getAllMemberAttributesFailure,

    MemberAttributesActions.getMemberAttributeByIdFailure,
    MemberAttributesActions.getPaginatedMemberAttributesFailure,
    MemberAttributesActions.getMemberAttributeByMemberTypeIdFailure,

    (state, { error }) => ({
      ...state,
      loading: false,
      loaded: false,
      error: error,
    })
  ),

  on(
    MemberAttributesActions.createMemberAttribute,
    MemberAttributesActions.updateMemberAttribute,
    MemberAttributesActions.deleteMemberAttribute,
    (state) => ({
      ...state,
      btnState: ClrLoadingState.LOADING,
      loaded: false,
      error: undefined,
    })
  ),

  on(
    MemberAttributesActions.createMemberAttributeSuccess,
    MemberAttributesActions.updateMemberAttributeSuccess,
    MemberAttributesActions.deleteMemberAttributeSuccess,
    (state) => ({
      ...state,
      btnState: ClrLoadingState.LOADING,
      loaded: true,
      error: undefined,
    })
  ),

  on(
    MemberAttributesActions.createMemberAttributeFailure,
    MemberAttributesActions.updateMemberAttributeFailure,
    MemberAttributesActions.deleteMemberAttributeFailure,
    (state, { error }) => ({
      ...state,
      error,
      btnState: ClrLoadingState.ERROR,
    })
  )
);

export function memberAttributesReducer(
  state: MemberAttributesState | undefined,
  action: Action
) {
  return reducer(state, action);
}
