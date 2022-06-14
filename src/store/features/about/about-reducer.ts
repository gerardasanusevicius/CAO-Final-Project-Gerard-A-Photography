/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'redux';
import { AboutState, AboutAction, AboutActionType } from './about-types';

const initialState: AboutState = {
  about: [],
  loading: false,
  error: null,
};

const aboutReducer: Reducer<AboutState, AboutAction> = (state = initialState, action) => {
  switch (action.type) {
    case AboutActionType.FETCH_ABOUT_LOADING: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case AboutActionType.FETCH_ABOUT_SUCCESS: {
      return {
        ...state,
        loading: false,
        about: action.payload.about,
      };
    }

    case AboutActionType.FETCH_ABOUT_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }

    default: return state;
  }
};

export default aboutReducer;
