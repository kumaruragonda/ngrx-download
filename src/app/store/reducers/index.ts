import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from './download.reducer';

export interface SharedState {
  user: fromUser.State;
}

export const reducers: ActionReducerMap<SharedState> = {
  user: fromUser.reducer
};

export const getSharedState = createFeatureSelector<SharedState>('shared');

export const getUserState = createSelector(getSharedState, (state: SharedState) => state.user);

