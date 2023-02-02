import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  MEMBER_PROFILES_FEATURE_KEY,
  MemberProfilesState,
  memberProfilesAdapter,
} from './member-profiles.reducer';

// Lookup the 'MemberProfiles' feature state managed by NgRx
export const getMemberProfilesState =
  createFeatureSelector<MemberProfilesState>(MEMBER_PROFILES_FEATURE_KEY);

const { selectAll, selectEntities } = memberProfilesAdapter.getSelectors();

export const getMemberProfilesLoaded = createSelector(
  getMemberProfilesState,
  (state: MemberProfilesState) => state.loaded
);

export const getMemberProfilesError = createSelector(
  getMemberProfilesState,
  (state: MemberProfilesState) => state.error
);

export const getAllMemberProfiles = createSelector(
  getMemberProfilesState,
  (state: MemberProfilesState) => selectAll(state)
);

export const getMemberProfilesEntities = createSelector(
  getMemberProfilesState,
  (state: MemberProfilesState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getMemberProfilesState,
  (state: MemberProfilesState) => state.selectedId
);

export const getSelected = (memberProfileId: string | number) =>
  createSelector(
    getMemberProfilesEntities,
    (entities) => entities[memberProfileId]
  );

export const getSelectedMemberProfile = createSelector(
  getMemberProfilesState,
  (state: MemberProfilesState) => state.selectedMemberProfiles
);

export const getTotalMemberProfiles = createSelector(
  getMemberProfilesState,
  (state: MemberProfilesState) => state.total
);

export const getCurrentPageState = createSelector(
  getMemberProfilesState,
  (state: MemberProfilesState) => state.currentPage
);

export const getMemberProfilesLoadingState = createSelector(
  getMemberProfilesState,
  (state: MemberProfilesState) => state.loading
);

export const getBtnState = createSelector(
  getMemberProfilesState,
  (state: MemberProfilesState) => state.btnState
);

export const getMyMemberProfileState = createSelector(
  getMemberProfilesState,
  (state: MemberProfilesState) => state.myMemberProfile
);
