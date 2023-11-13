import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, loginFailure } from './user.actions';
import { createSelector } from '@ngrx/store';

const selectLogin = (state: any) => state.login;

export const selectToken = createSelector(selectLogin, (state) => state.token);

export const selectError = createSelector(selectLogin, (state) => state.error);

export const selectIsLoading = createSelector(
  selectLogin,
  (state) => state.isLoading,
);

export interface State {
  token?: string;
  error?: string;
  isLoading: boolean;
}

const initialState: State = {
  token: undefined,
  error: undefined,
  isLoading: false,
};

export const loginReducer = createReducer(
  initialState,
  on(login, (state) => ({ ...state, isLoading: true })),
  on(loginSuccess, (state, { token }) => ({
    ...state,
    token,
    isLoading: false,
  })),
  on(loginFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
);
