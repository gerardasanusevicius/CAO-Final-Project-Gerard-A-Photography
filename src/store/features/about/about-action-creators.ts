/* eslint-disable import/prefer-default-export */
import { Dispatch } from 'react';
import AboutService from '../../../services/projects-api-service';
import { About } from '../../../types';
import { AppAction } from '../../redux-types';
import {
  AboutActionType,
  FetchAboutLoadingAction,
  FetchAboutSuccessAction,
  FetchAboutFailureAction,
} from './about-types';

const aboutFetchAboutLoadingAction: FetchAboutLoadingAction = {
  type: AboutActionType.FETCH_ABOUT_LOADING,
};

const createFetchAboutSuccessAction = (about: About[]): FetchAboutSuccessAction => ({
  type: AboutActionType.FETCH_ABOUT_SUCCESS,
  payload: { about },
});

const createFetchAboutFailureAction = (error: string): FetchAboutFailureAction => ({
  type: AboutActionType.FETCH_ABOUT_FAILURE,
  payload: { error },
});

export const fetchAboutThunkAction = async (dispatch: Dispatch<AppAction>): Promise<void> => {
  dispatch(aboutFetchAboutLoadingAction);
  try {
    const about = await AboutService.fetchAbout();

    const fetchAboutSuccessAction = createFetchAboutSuccessAction(about);
    dispatch(fetchAboutSuccessAction);
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    const fetchAboutFailureAction = createFetchAboutFailureAction(errMsg);
    dispatch(fetchAboutFailureAction);
  }
};
