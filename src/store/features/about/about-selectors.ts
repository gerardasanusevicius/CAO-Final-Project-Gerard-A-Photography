import { RootState } from '../../redux-types';

export const selectAboutProjects = (state: RootState) => state.about.projects;
export const selectAboutProjectsLoading = (state: RootState) => state.about.loading;
