import { ThunkDispatch } from 'redux-thunk';
import { PortfolioAction, PortfolioState } from './features/portfolio/portfolio-types';
import { ProjectsAction, ProjectsState } from './features/projects/projects-types';
import { AuthAction, AuthState } from './features/auth/types';
import { NavigationAction, NavigationState } from './features/navigation/types';

export type RootState = {
  portfolio: PortfolioState,
  projects: ProjectsState,
  auth: AuthState,
  navigation: NavigationState,
};

export type AppAction = PortfolioAction | ProjectsAction | AuthAction | NavigationAction;

export type AppDispatch = ThunkDispatch<RTCIceConnectionState, undefined, AppAction>;
