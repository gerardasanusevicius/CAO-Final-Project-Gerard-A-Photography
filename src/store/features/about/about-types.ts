import { About } from '../../../types';

export type AboutState = {
  about: About[],
  loading: boolean,
  error: string | null,
};

export enum AboutActionType {
  FETCH_ABOUT_LOADING = 'FETCH_ABOUT_LOADING',
  FETCH_ABOUT_SUCCESS = 'FETCH_ABOUT_SUCCESS',
  FETCH_ABOUT_FAILURE = 'FETCH_ABOUT_FAILURE',
}

export type FetchAboutLoadingAction = {
  type: AboutActionType.FETCH_ABOUT_LOADING,
};

export type FetchAboutSuccessAction = {
  type: AboutActionType.FETCH_ABOUT_SUCCESS,
  payload: {
    about: About[],
  }
};

export type FetchAboutFailureAction = {
  type: AboutActionType.FETCH_ABOUT_FAILURE,
  payload: {
    error: string,
  }
};

export type AboutAction = FetchAboutLoadingAction | FetchAboutSuccessAction | FetchAboutFailureAction;
