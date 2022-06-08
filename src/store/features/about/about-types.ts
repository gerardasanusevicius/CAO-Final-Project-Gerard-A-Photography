import { Project } from '../../../types';

export type AboutState = {
  projects: Project[],
  loading: boolean,
  error: string | null,
};

export enum AboutActionType {
  ABOUT_DELETE_PROJECT,
  ABOUT_FETCH_PROJECTS_LOADING,
  ABOUT_FETCH_PROJECTS_SUCCESS,
  ABOUT_FETCH_PROJECTS_FAILURE,
}

export type AboutDeleteProjectAction = {
  type: AboutActionType.ABOUT_DELETE_PROJECT,
  payload: {
    id: string,
  },
};

export type AboutFetchProjectsLoadingAction = {
  type: AboutActionType.ABOUT_FETCH_PROJECTS_LOADING,
};

export type AboutFetchProjectsSuccessAction = {
  type: AboutActionType.ABOUT_FETCH_PROJECTS_SUCCESS,
  payload: {
    projects: Project[],
  }
};

export type AboutFetchProjectsFailureAction = {
  type: AboutActionType.ABOUT_FETCH_PROJECTS_FAILURE,
  payload: {
    error: string,
  }
};

export type AboutAction = AboutDeleteProjectAction | AboutFetchProjectsLoadingAction | AboutFetchProjectsSuccessAction | AboutFetchProjectsFailureAction;
