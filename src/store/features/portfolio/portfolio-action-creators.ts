/* eslint-disable import/prefer-default-export */
import { Dispatch } from 'react';
import PortfolioService from '../../../services/portfolio-service';
import { Picture } from '../../../types';
import { AppAction, RootState } from '../../redux-types';
import {
  PortfolioActionType,
  PortfolioFetchPicturesLoadingAction,
  PortfolioFetchPicturesSuccessAction,
  PortfolioFetchPicturesFailureAction,
} from './portfolio-types';

const portfolioFetchPicturesLoadingAction: PortfolioFetchPicturesLoadingAction = {
  type: PortfolioActionType.PORTFOLIO_FETCH_PICTURES_LOADING,
};

const createPortfolioFetchPicturesSuccessAction = (pictures: Picture[]): PortfolioFetchPicturesSuccessAction => ({
  type: PortfolioActionType.PORTFOLIO_FETCH_PICTURES_SUCCESS,
  payload: { pictures },
});

const createPortfolioFetchPicturesFailureAction = (error: string): PortfolioFetchPicturesFailureAction => ({
  type: PortfolioActionType.PORTFOLIO_FETCH_PICTURES_FAILURE,
  payload: { error },
});

export const portfolioFetchPicturesAction = async (dispatch: Dispatch<AppAction>, getState: () => RootState): Promise<void> => {
  dispatch(portfolioFetchPicturesLoadingAction);
  try {
    const portfolioPictures = await PortfolioService.fetchPictures();

    const portfolioFetchPicturesSuccessAction = createPortfolioFetchPicturesSuccessAction(portfolioPictures);
    dispatch(portfolioFetchPicturesSuccessAction);
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    const portfolioFetchPicturesFailureAction = createPortfolioFetchPicturesFailureAction(errMsg);
    dispatch(portfolioFetchPicturesFailureAction);
  }
};
