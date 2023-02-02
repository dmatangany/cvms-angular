import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import {
  MEMBER_TYPES_FEATURE_KEY,
  MemberTypesState,
  memberTypesAdapter,
} from './member-types.reducer';

// Lookup the 'MemberTypes' feature state managed by NgRx
export const getMemberTypesState = createFeatureSelector<MemberTypesState>(
  MEMBER_TYPES_FEATURE_KEY
);

const { selectAll, selectEntities } = memberTypesAdapter.getSelectors();

export const getMemberTypesLoaded = createSelector(
  getMemberTypesState,
  (state: MemberTypesState) => state.loaded
);

export const getMemberTypesError = createSelector(
  getMemberTypesState,
  (state: MemberTypesState) => state.error
);

export const getAllMemberTypes = createSelector(
  getMemberTypesState,
  (state: MemberTypesState) => selectAll(state)
);

export const getMemberTypesEntities = createSelector(
  getMemberTypesState,
  (state: MemberTypesState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getMemberTypesState,
  (state: MemberTypesState) => state.selectedId
);

export const getSelected = (memberTypeId: string | number) =>
  createSelector(getMemberTypesEntities, (entities) => entities[memberTypeId]);

export const getSelectedMemberType = createSelector(
  getMemberTypesState,
  (state: MemberTypesState) => state.selectedMemberTypes
);

export const getTotalMemberTypes = createSelector(
  getMemberTypesState,
  (state: MemberTypesState) => state.total
);

export const getCurrentPageState = createSelector(
  getMemberTypesState,
  (state: MemberTypesState) => state.currentPage
);

export const getMemberTypesLoadingState = createSelector(
  getMemberTypesState,
  (state: MemberTypesState) => state.loading
);

export const getBtnState = createSelector(
  getMemberTypesState,
  (state: MemberTypesState) => state.btnState
);
