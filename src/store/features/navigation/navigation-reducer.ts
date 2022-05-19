/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'redux';
import { NavigationState, NavigationAction } from './types';

const initialState: NavigationState = {
  redirect: null,
};

const navigationReducer: Reducer<NavigationState, NavigationAction> = (state = initialState, action) => {
  switch (action.type) {
    case 'NAVIGATION_CLEAR_REDIRECT': {
      return {
        ...state,
        redirect: null,
      };
    }

    case 'NAVIGATION_SET_REDIRECT': {
      return {
        ...state,
        redirect: action.payload.redirect,
      };
    }

    default: return state;
  }
};

export default navigationReducer;
