import { RootState } from '../../redux-types';

export const selectLoggedIn = (state: RootState) => Boolean(state.auth.user);

export const selectUser = (state: RootState) => state.auth.user;

export const selectAuthLoading = (state: RootState) => state.auth.loading;

export const selectAuthError = (state: RootState) => state.auth.error;
