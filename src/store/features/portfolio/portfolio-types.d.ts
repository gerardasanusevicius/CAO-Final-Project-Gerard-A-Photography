import { Picture } from '../../../types';

export type PortfolioState = {
  pictures: Picture[],
  loading: boolean,
  error: string | null,
};

export enum PortfolioActionType {
  PORTFOLIO_DELETE_PICTURE,
  PORTFOLIO_FETCH_PICTURES_LOADING,
  PORTFOLIO_FETCH_PICTURES_SUCCESS,
  PORTFOLIO_FETCH_PICTURES_FAILURE,
}

export type PortfolioDeletePicture = {
  type: PortfolioActionType.PORTFOLIO_DELETE_PICTURE
  payload: {
    id: string,
    amount: number
  },
};

export type PortfolioFetchPicturesLoadingAction = {
  type: PortfolioActionType.PORTFOLIO_FETCH_PICTURES_LOADING
};

export type PortfolioFetchPicturesSuccessAction = {
  type: PortfolioActionType.PORTFOLIO_FETCH_PICTURES_SUCCESS,
  payload: {
    pictures: Picture[],
  }
};

export type PortfolioFetchPicturesFailureAction = {
  type: PortfolioActionType.PORTFOLIO_FETCH_PICTURES_FAILURE,
  payload: {
    error: string,
  }
};

export type PortfolioAction = PortfolioDeletePicture | PortfolioFetchPicturesLoadingAction | PortfolioFetchPicturesSuccessAction | PortfolioFetchPicturesFailureAction;
