import { RootState } from './types';

export const selectLoggedIn = (state: RootState) => Boolean(state.auth.user);

export const selectUser = (state: RootState) => state.auth.user;

export const selectAuthLoading = (state: RootState) => state.auth.loading;

export const selectAuthError = (state: RootState) => state.auth.error;

export const selectRedirect = (state: RootState) => state.navigation.redirect;

export const selectReduxTestPictures = (state: RootState) => state.reduxTest.pictures;
