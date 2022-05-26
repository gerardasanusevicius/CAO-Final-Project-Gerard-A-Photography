import { ThunkDispatch } from 'redux-thunk';
import { AuthAction, AuthState } from './features/auth/types';
import { NavigationAction, NavigationState } from './features/navigation/types';
import { PortfolioAction, PortfolioState } from './features/portfolio/portfolio-types';

export type RootState = {
  portfolio: PortfolioState,
  auth: AuthState,
  navigation: NavigationState,
};

export type AppAction = AuthAction | NavigationAction | PortfolioAction;

export type AppDispatch = ThunkDispatch<RTCIceConnectionState, undefined, AppAction>;
