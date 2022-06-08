/* eslint-disable import/prefer-default-export */
import { Dispatch } from 'react';
import AboutService from '../../../services/about-api-service';
import { Project } from '../../../types';
import { AppAction } from '../../redux-types';
import {
  AboutDeleteProjectAction,
  AboutActionType,
  AboutFetchProjectsLoadingAction,
  AboutFetchProjectsSuccessAction,
  AboutFetchProjectsFailureAction,
} from './about-types';

const aboutFetchProjectsLoadingAction: AboutFetchProjectsLoadingAction = {
  type: AboutActionType.ABOUT_FETCH_PROJECTS_LOADING,
};

const createAboutFetchProjectsSuccessAction = (projects: Project[]): AboutFetchProjectsSuccessAction => ({
  type: AboutActionType.ABOUT_FETCH_PROJECTS_SUCCESS,
  payload: { projects },
});

const createAboutFetchProjectsFailureAction = (error: string): AboutFetchProjectsFailureAction => ({
  type: AboutActionType.ABOUT_FETCH_PROJECTS_FAILURE,
  payload: { error },
});

const createAboutDeleteProjectAction = (id: string): AboutDeleteProjectAction => ({
  type: AboutActionType.ABOUT_DELETE_PROJECT,
  payload: { id },
});

export const aboutFetchProjectsThunkAction = async (dispatch: Dispatch<AppAction>): Promise<void> => {
  dispatch(aboutFetchProjectsLoadingAction);
  try {
    const aboutProjects = await AboutService.fetchProjects();

    const aboutFetchProjectsSuccessAction = createAboutFetchProjectsSuccessAction(aboutProjects);
    dispatch(aboutFetchProjectsSuccessAction);
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    const aboutFetchProjectsFailureAction = createAboutFetchProjectsFailureAction(errMsg);
    dispatch(aboutFetchProjectsFailureAction);
  }
};

export const createAboutDeleteProjectThunkAction = (id: string) => async (dispatch: Dispatch<AppAction>): Promise<void> => {
  try {
    await AboutService.deleteProjectById(id);
    dispatch(createAboutDeleteProjectAction(id));
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    throw Error(errMsg);
  }
};
