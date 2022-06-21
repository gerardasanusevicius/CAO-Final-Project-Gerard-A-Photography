/* eslint-disable import/prefer-default-export */
import { Dispatch } from 'react';
import PortfolioService from '../../../services/portfolio-api-service';
import { Picture } from '../../../types';
import { AppAction } from '../../redux-types';
import {
  PortfolioDeletePictureAction,
  PortfolioActionType,
  PortfolioFetchPicturesLoadingAction,
  PortfolioFetchPicturesSuccessAction,
  PortfolioFetchPicturesFailureAction,
  // PortfolioShiftPictureLeftAction,
  // PortfolioShiftPictureRightAction,
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

const createPortfolioDeletePictureAction = (id: string): PortfolioDeletePictureAction => ({
  type: PortfolioActionType.PORTFOLIO_DELETE_PICTURE,
  payload: { id },
});

export const portfolioFetchPicturesThunkAction = async (dispatch: Dispatch<AppAction>): Promise<void> => {
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

export const createPortfolioShiftPictureLeftActionThunk = (id: string, token: string) => async (dispatch: Dispatch<AppAction>): Promise<void> => {
  try {
    await PortfolioService.shiftPictureLeft(id, token);
    await portfolioFetchPicturesThunkAction(dispatch);
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    throw Error(errMsg);
  }
};

export const createPortfolioShiftPictureRightActionThunk = (id: string, token: string) => async (dispatch: Dispatch<AppAction>): Promise<void> => {
  try {
    await PortfolioService.shiftPictureRight(id, token);
    await portfolioFetchPicturesThunkAction(dispatch);
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    throw Error(errMsg);
  }
};

export const createPortfolioDeletePictureThunkAction = (id: string, token: string) => async (dispatch: Dispatch<AppAction>): Promise<void> => {
  try {
    await PortfolioService.deletePictureById(id, token);
    dispatch(createPortfolioDeletePictureAction(id));
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    throw Error(errMsg);
  }
};
