import { Picture } from '../../../types';

export type PortfolioState = {
  pictures: Picture[],
  loading: boolean,
  error: string | null,
};

export enum PortfolioActionType {
  PORTFOLIO_DELETE_PICTURE = 'PORTFOLIO_DELETE_PICTURE',
  PORTFOLIO_MOVE_PICTURE_BACK = 'PORTFOLIO_MOVE_PICTURE_BACK',
  PORTFOLIO_MOVE_PICTURE_FORWARD = 'PORTFOLIO_MOVE_PICTURE_FORWARD',
  PORTFOLIO_FETCH_PICTURES_LOADING = 'PORTFOLIO_FETCH_PICTURES_LOADING',
  PORTFOLIO_FETCH_PICTURES_SUCCESS = 'PORTFOLIO_FETCH_PICTURES_SUCCESS',
  PORTFOLIO_FETCH_PICTURES_FAILURE = 'PORTFOLIO_FETCH_PICTURES_FAILURE',
}

export type PortfolioDeletePictureAction = {
  type: PortfolioActionType.PORTFOLIO_DELETE_PICTURE
  payload: {
    id: string,
  },
};

export type PortfolioMovePictureBackAction = {
  type: PortfolioActionType.PORTFOLIO_MOVE_PICTURE_BACK
  payload: {
    id: string,
  },
};

export type PortfolioMovePictureForwardAction = {
  type: PortfolioActionType.PORTFOLIO_MOVE_PICTURE_FORWARD
  payload: {
    id: string,
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

export type PortfolioAction = PortfolioDeletePictureAction | PortfolioMovePictureBackAction | PortfolioMovePictureForwardAction | PortfolioFetchPicturesLoadingAction | PortfolioFetchPicturesSuccessAction | PortfolioFetchPicturesFailureAction;
