/* eslint-disable import/prefer-default-export */
import { RootState } from '../../redux-types';

export const selectPortfolioPictures = (state: RootState) => state.portfolio.pictures;
