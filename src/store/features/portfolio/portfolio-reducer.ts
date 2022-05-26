/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'redux';
import { PortfolioState, PortfolioAction } from './portfolio-types';

const initialState: PortfolioState = {
  pictures: [],
  loading: false,
  error: null,
};

const PortfolioReducer: Reducer<PortfolioState, PortfolioAction> = (state = initialState, action) => {
  if (action.type === 'DELETE_PICTURE') {
    return {
      ...state,
      pictures: state.pictures.filter((picture) => picture.id !== action.payload.id),
      // arba
      // pictures: [...state.pictures.slice(0, action.payload.id), ...state.pictures.slice(action.payload.id + 1)],
    };
  }
  return { ...state };
};

export default PortfolioReducer;
