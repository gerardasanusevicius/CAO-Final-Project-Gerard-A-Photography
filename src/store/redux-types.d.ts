import { ThunkDispatch } from 'redux-thunk';
import { PortfolioAction, PortfolioState } from './features/portfolio/portfolio-types';
import { ProjectsAction, ProjectsState } from './features/projects/projects-types';
import { ContactsAction, ContactsState } from './features/contacts/contacts-types';
import { AboutAction, AboutState } from './features/about/about-types';
import { AuthAction, AuthState } from './features/auth/auth-types';
import { NavigationAction, NavigationState } from './features/navigation/navigation-types';

export type RootState = {
  portfolio: PortfolioState,
  projects: ProjectsState,
  contacts: ContactsState,
  about: AboutState,
  auth: AuthState,
  navigation: NavigationState,
};

export type AppAction = PortfolioAction | ProjectsAction | AuthAction | ContactsAction | AboutAction | NavigationAction;

export type AppDispatch = ThunkDispatch<RTCIceConnectionState, undefined, AppAction>;
