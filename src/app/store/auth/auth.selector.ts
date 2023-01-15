import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntitySelectors, EntityState } from '@ngrx/entity/src/models';
import { AuthState, authAdapter } from './auth.state';
import { User } from 'src/app/model/user/user.model';

// Call the Store we want use
export const getAuthState = createFeatureSelector<AuthState>('auth');

// Create the Entity and retrieve Users lists and length
export const {
  selectAll: selectAllUsers,
  selectTotal: count,
}: EntitySelectors<User, EntityState<User>> = authAdapter.getSelectors();

// Create Other Selectors
export const loading = (state: AuthState) => state.loading;
export const error = (state: AuthState) => state.error;

// Export Selectors
export const selectUsers = createSelector(getAuthState, selectAllUsers);
export const selectTotal = createSelector(getAuthState, count);
export const selectLoading = createSelector(getAuthState, loading);
export const selectError = createSelector(getAuthState, error);
