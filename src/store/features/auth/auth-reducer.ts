/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'redux';
import { AuthState, AuthAction } from './types';

const initialState: AuthState = {
  user: null,
  error: null,
  loading: false,
};

const authReducer: Reducer<AuthState, AuthAction> = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_SUCCESS': {
      return {
        ...state,
        user: action.payload.user,
        loading: false,
      };
    }

    case 'AUTH_FAILURE': {
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    }

    case 'AUTH_LOGOUT': {
      return {
        ...state,
        user: null,
      };
    }

    case 'AUTH_CLEAR_ERROR': {
      return {
        ...state,
        error: null,
      };
    }

    case 'AUTH_LOADING': {
      return {
        ...state,
        error: null,
        loading: true,
      };
    }

    default: return state;
  }
};

export default authReducer;
