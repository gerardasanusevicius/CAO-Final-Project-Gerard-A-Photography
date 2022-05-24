/* eslint-disable import/prefer-default-export */
import { RootState } from '../../types';

export const selectReduxTestPictures = (state: RootState) => state.reduxTest.pictures;
