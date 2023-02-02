import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  MEMBER_PACKAGES_FEATURE_KEY,
  MemberPackagesState,
  memberPackagesAdapter,
} from './member-packages.reducer';

// Lookup the 'MemberPackages' feature state managed by NgRx
export const getMemberPackagesState =
  createFeatureSelector<MemberPackagesState>(MEMBER_PACKAGES_FEATURE_KEY);

const { selectAll, selectEntities } = memberPackagesAdapter.getSelectors();

export const getMemberPackagesLoaded = createSelector(
  getMemberPackagesState,
  (state: MemberPackagesState) => state.loaded
);

export const getMemberPackagesError = createSelector(
  getMemberPackagesState,
  (state: MemberPackagesState) => state.error
);

export const getAllMemberPackages = createSelector(
  getMemberPackagesState,
  (state: MemberPackagesState) => selectAll(state)
);

export const getMemberPackagesEntities = createSelector(
  getMemberPackagesState,
  (state: MemberPackagesState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getMemberPackagesState,
  (state: MemberPackagesState) => state.selectedId
);

export const getSelected = (memberPackageId: string | number) =>
  createSelector(
    getMemberPackagesEntities,
    (entities) => entities[memberPackageId]
  );

export const getSelectedMemberPackage = createSelector(
  getMemberPackagesState,
  (state: MemberPackagesState) => state.selectedMemberPackages
);

export const getTotalMemberPackages = createSelector(
  getMemberPackagesState,
  (state: MemberPackagesState) => state.total
);

export const getCurrentPageState = createSelector(
  getMemberPackagesState,
  (state: MemberPackagesState) => state.currentPage
);

export const getMemberPackagesLoadingState = createSelector(
  getMemberPackagesState,
  (state: MemberPackagesState) => state.loading
);

export const getBtnState = createSelector(
  getMemberPackagesState,
  (state: MemberPackagesState) => state.btnState
);
