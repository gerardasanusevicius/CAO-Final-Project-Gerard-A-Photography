import { RootState } from '../../redux-types';

export const selectAbout = (state: RootState) => state.about.about;
export const selectAboutLoading = (state: RootState) => state.about.loading;
