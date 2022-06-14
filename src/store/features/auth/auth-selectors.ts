import { RootState } from '../../redux-types';

export const selectAuthLoggedIn = (state: RootState) => Boolean(state.auth.admin);

export const selectAuthAdmin = (state: RootState) => state.auth.admin;

export const selectAuthLoading = (state: RootState) => state.auth.loading;

export const selectAuthError = (state: RootState) => state.auth.error;

export const selectAuthToken = (state: RootState) => state.auth.token;
