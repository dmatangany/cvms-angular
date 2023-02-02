import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  MEMBER_ACCOUNTS_FEATURE_KEY,
  MemberAccountsState,
  memberAccountsAdapter,
} from './member-accounts.reducer';

// Lookup the 'MemberAccounts' feature state managed by NgRx
export const getMemberAccountsState =
  createFeatureSelector<MemberAccountsState>(MEMBER_ACCOUNTS_FEATURE_KEY);

const { selectAll, selectEntities } = memberAccountsAdapter.getSelectors();

export const getMemberAccountsLoaded = createSelector(
  getMemberAccountsState,
  (state: MemberAccountsState) => state.loaded
);

export const getMemberAccountsError = createSelector(
  getMemberAccountsState,
  (state: MemberAccountsState) => state.error
);

export const getAllMemberAccounts = createSelector(
  getMemberAccountsState,
  (state: MemberAccountsState) => selectAll(state)
);

export const getMemberAccountsEntities = createSelector(
  getMemberAccountsState,
  (state: MemberAccountsState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getMemberAccountsState,
  (state: MemberAccountsState) => state.selectedId
);

export const getSelected = (memberAccountId: string | number) =>
  createSelector(
    getMemberAccountsEntities,
    (entities) => entities[memberAccountId]
  );

export const getSelectedMemberAccount = createSelector(
  getMemberAccountsState,
  (state: MemberAccountsState) => state.selectedMemberAccounts
);

export const getTotalMemberAccounts = createSelector(
  getMemberAccountsState,
  (state: MemberAccountsState) => state.total
);

export const getCurrentPageState = createSelector(
  getMemberAccountsState,
  (state: MemberAccountsState) => state.currentPage
);

export const getMemberAccountsLoadingState = createSelector(
  getMemberAccountsState,
  (state: MemberAccountsState) => state.loading
);

export const getBtnState = createSelector(
  getMemberAccountsState,
  (state: MemberAccountsState) => state.btnState
);
