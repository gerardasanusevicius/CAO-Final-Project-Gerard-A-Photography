/* eslint-disable import/prefer-default-export */
import { RootState } from '../../redux-types';

export const selectRedirect = (state: RootState) => state.navigation.redirect;
