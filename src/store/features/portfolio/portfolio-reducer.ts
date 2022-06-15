/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'redux';
import { PortfolioState, PortfolioAction, PortfolioActionType } from './portfolio-types';

const initialState: PortfolioState = {
  pictures: [],
  loading: false,
  error: null,
};

const portfolioReducer: Reducer<PortfolioState, PortfolioAction> = (state = initialState, action) => {
  switch (action.type) {
    case PortfolioActionType.PORTFOLIO_FETCH_PICTURES_LOADING: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case PortfolioActionType.PORTFOLIO_FETCH_PICTURES_SUCCESS: {
      return {
        ...state,
        loading: false,
        pictures: action.payload.pictures,
      };
    }

    case PortfolioActionType.PORTFOLIO_FETCH_PICTURES_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }

    case PortfolioActionType.PORTFOLIO_DELETE_PICTURE: {
      return {
        ...state,
        pictures: state.pictures.filter((picture) => picture.id !== action.payload.id),
      };
    }

    // case PortfolioActionType.PORTFOLIO_MOVE_PICTURE_BACK: {
    //   return {
    //     ...state,
    //     pictures: state.pictures.filter((picture) => picture.id === action.payload.id),
    //   };
    // }

    // case PortfolioActionType.PORTFOLIO_MOVE_PICTURE_FORWARD: {
    //   return {
    //     ...state,
    //     pictures: state.pictures.filter((picture) => picture.id === action.payload.id),
    //   };
    // }

    default: return state;
  }
};

export default portfolioReducer;
