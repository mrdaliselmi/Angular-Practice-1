import { createReducer, on } from '@ngrx/store';
import { login, logout } from './user.actions';

export const initialState = { isAuthenticated: false };

export const userReducer = createReducer(
  initialState,
  on(login, (state, action) => ({ ...state, isAuthenticated: true })),

  // Handle logout action
  on(logout, (state) => ({ ...state, isAuthenticated: false })),
);
