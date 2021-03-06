import { createFeatureSelector, createSelector } from '@ngrx/store';

export const userStateName = 'userState';

export interface UserState {
    username: string;
    error: string;
    loading: boolean;
}

export const userStateSelector = createFeatureSelector<UserState>(userStateName);

export const userUsernameSelector = createSelector(userStateSelector, state => state.username);
