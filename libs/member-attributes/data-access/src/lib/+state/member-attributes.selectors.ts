import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  MEMBER_ATTRIBUTES_FEATURE_KEY,
  MemberAttributesState,
  memberAttributesAdapter,
} from './member-attributes.reducer';

// Lookup the 'MemberAttributes' feature state managed by NgRx
export const getMemberAttributesState =
  createFeatureSelector<MemberAttributesState>(MEMBER_ATTRIBUTES_FEATURE_KEY);

const { selectAll, selectEntities } = memberAttributesAdapter.getSelectors();

export const getMemberAttributesLoaded = createSelector(
  getMemberAttributesState,
  (state: MemberAttributesState) => state.loaded
);

export const getMemberAttributesError = createSelector(
  getMemberAttributesState,
  (state: MemberAttributesState) => state.error
);

export const getAllMemberAttributes = createSelector(
  getMemberAttributesState,
  (state: MemberAttributesState) => selectAll(state)
);

export const getMemberAttributesEntities = createSelector(
  getMemberAttributesState,
  (state: MemberAttributesState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getMemberAttributesState,
  (state: MemberAttributesState) => state.selectedId
);

export const getSelected = (memberAttributeId: string | number) =>
  createSelector(
    getMemberAttributesEntities,
    (entities) => entities[memberAttributeId]
  );

export const getSelectedMemberAttribute = createSelector(
  getMemberAttributesState,
  (state: MemberAttributesState) => state.selectedMemberAttributes
);

export const getTotalMemberAttributes = createSelector(
  getMemberAttributesState,
  (state: MemberAttributesState) => state.total
);

export const getCurrentPageState = createSelector(
  getMemberAttributesState,
  (state: MemberAttributesState) => state.currentPage
);

export const getMemberAttributesLoadingState = createSelector(
  getMemberAttributesState,
  (state: MemberAttributesState) => state.loading
);

export const getBtnState = createSelector(
  getMemberAttributesState,
  (state: MemberAttributesState) => state.btnState
);
