import { Project } from '../../../types';

export type ProjectsState = {
  projects: Project[],
  loading: boolean,
  error: string | null,
};

export enum ProjectsActionType {
  DELETE_PROJECT = 'DELETE_PROJECT',
  FETCH_PROJECTS_LOADING = 'FETCH_PROJECTS_LOADING',
  FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS',
  FETCH_PROJECTS_FAILURE = 'FETCH_PROJECTS_FAILURE',
}

export type DeleteProjectAction = {
  type: ProjectsActionType.DELETE_PROJECT,
  payload: {
    id: string,
  },
};

export type FetchProjectsLoadingAction = {
  type: ProjectsActionType.FETCH_PROJECTS_LOADING,
};

export type FetchProjectsSuccessAction = {
  type: ProjectsActionType.FETCH_PROJECTS_SUCCESS,
  payload: {
    projects: Project[],
  }
};

export type FetchProjectsFailureAction = {
  type: ProjectsActionType.FETCH_PROJECTS_FAILURE,
  payload: {
    error: string,
  }
};

export type ProjectsAction = DeleteProjectAction | FetchProjectsLoadingAction | FetchProjectsSuccessAction | FetchProjectsFailureAction;
