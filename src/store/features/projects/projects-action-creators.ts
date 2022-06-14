/* eslint-disable import/prefer-default-export */
import { Dispatch } from 'react';
import ProjectsService from '../../../services/projects-api-service';
import { Project } from '../../../types';
import { AppAction } from '../../redux-types';
import {
  DeleteProjectAction,
  ProjectsActionType,
  FetchProjectsLoadingAction,
  FetchProjectsSuccessAction,
  FetchProjectsFailureAction,
} from './projects-types';

const aboutFetchProjectsLoadingAction: FetchProjectsLoadingAction = {
  type: ProjectsActionType.FETCH_PROJECTS_LOADING,
};

const createFetchProjectsSuccessAction = (projects: Project[]): FetchProjectsSuccessAction => ({
  type: ProjectsActionType.FETCH_PROJECTS_SUCCESS,
  payload: { projects },
});

const createFetchProjectsFailureAction = (error: string): FetchProjectsFailureAction => ({
  type: ProjectsActionType.FETCH_PROJECTS_FAILURE,
  payload: { error },
});

const createDeleteProjectAction = (id: string): DeleteProjectAction => ({
  type: ProjectsActionType.DELETE_PROJECT,
  payload: { id },
});

export const fetchProjectsThunkAction = async (dispatch: Dispatch<AppAction>): Promise<void> => {
  dispatch(aboutFetchProjectsLoadingAction);
  try {
    const projects = await ProjectsService.fetchProjects();

    const fetchProjectsSuccessAction = createFetchProjectsSuccessAction(projects);
    dispatch(fetchProjectsSuccessAction);
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    const fetchProjectsFailureAction = createFetchProjectsFailureAction(errMsg);
    dispatch(fetchProjectsFailureAction);
  }
};

export const createDeleteProjectThunkAction = (id: string) => async (dispatch: Dispatch<AppAction>): Promise<void> => {
  try {
    await ProjectsService.deleteProjectById(id);
    dispatch(createDeleteProjectAction(id));
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    throw Error(errMsg);
  }
};
