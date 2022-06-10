/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'redux';
import { ProjectsState, ProjectsAction, ProjectsActionType } from './projects-types';

const initialState: ProjectsState = {
  projects: [],
  loading: false,
  error: null,
};

const projectsReducer: Reducer<ProjectsState, ProjectsAction> = (state = initialState, action) => {
  switch (action.type) {
    case ProjectsActionType.FETCH_PROJECTS_LOADING: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case ProjectsActionType.FETCH_PROJECTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        projects: action.payload.projects,
      };
    }

    case ProjectsActionType.FETCH_PROJECTS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }

    case ProjectsActionType.DELETE_PROJECT: {
      return {
        ...state,
        projects: state.projects.filter((project) => project.id !== action.payload.id),
      };
    }

    default: return state;
  }
};

export default projectsReducer;
