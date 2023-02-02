import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
    GROUPS_FEATURE_KEY,
    State,
    groupsAdapter,
} from './groups.reducer';

export const getGroupsState = createFeatureSelector<State>(GROUPS_FEATURE_KEY);

const { selectAll, selectEntities } = groupsAdapter.getSelectors();

export const getGroupsLoaded = createSelector(
    getGroupsState,
    (state: State) => state.loaded
);

export const getGroupsError = createSelector(
    getGroupsState,
    (state: State) => state.error
);

export const getAllGroups = createSelector(getGroupsState, (state: State) =>
    selectAll(state)
);

export const getGroupsEntities = createSelector(
    getGroupsState,
    (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
    getGroupsState,
    (state: State) => state.selectedId
);

export const getSelected = (groupId: string | number) =>
    createSelector(getGroupsEntities, (entities) => entities[groupId]);

export const getSelectedGroup = createSelector(
    getGroupsState,
    (state: State) => state.selectedGroup
);

export const getTotalGroups = createSelector(
    getGroupsState,
    (state: State) => state.total
);

export const getCurrentPageState = createSelector(
    getGroupsState,
    (state: State) => state.currentPage
);

export const getGroupsLoadingState = createSelector(
    getGroupsState,
    (state: State) => state.loading
);

export const getBtnState = createSelector(
    getGroupsState,
    (state: State) => state.btnState
);

