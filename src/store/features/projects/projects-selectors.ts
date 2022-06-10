import { RootState } from '../../redux-types';

export const selectProjects = (state: RootState) => state.projects.projects;
export const selectProjectsLoading = (state: RootState) => state.projects.loading;
