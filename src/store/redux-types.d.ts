import { ThunkDispatch } from 'redux-thunk';
import { PortfolioAction, PortfolioState } from './features/portfolio/portfolio-types';
import { AboutAction, AboutState } from './features/about/about-types';
import { AuthAction, AuthState } from './features/auth/types';
import { NavigationAction, NavigationState } from './features/navigation/types';

export type RootState = {
  portfolio: PortfolioState,
  about: AboutState,
  auth: AuthState,
  navigation: NavigationState,
};

export type AppAction = PortfolioAction | AboutAction | AuthAction | NavigationAction;

export type AppDispatch = ThunkDispatch<RTCIceConnectionState, undefined, AppAction>;
