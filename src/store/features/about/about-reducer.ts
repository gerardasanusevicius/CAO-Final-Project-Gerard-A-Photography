/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'redux';
import { AboutState, AboutAction, AboutActionType } from './about-types';

const initialState: AboutState = {
  projects: [],
  loading: false,
  error: null,
};

const aboutReducer: Reducer<AboutState, AboutAction> = (state = initialState, action) => {
  switch (action.type) {
    case AboutActionType.ABOUT_FETCH_PROJECTS_LOADING: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case AboutActionType.ABOUT_FETCH_PROJECTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        projects: action.payload.projects,
      };
    }

    case AboutActionType.ABOUT_FETCH_PROJECTS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }

    case AboutActionType.ABOUT_DELETE_PROJECT: {
      return {
        ...state,
        projects: state.projects.filter((project) => project.id !== action.payload.id),
      };
    }

    default: return state;
  }
};

export default aboutReducer;
