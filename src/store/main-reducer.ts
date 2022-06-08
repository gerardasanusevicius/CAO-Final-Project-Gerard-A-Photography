import { combineReducers } from 'redux';
import aboutReducer from './features/about/about-reducer';
import authReducer from './features/auth/auth-reducer';
import navigationReducer from './features/navigation/navigation-reducer';
import portfolioReducer from './features/portfolio/portfolio-reducer';

const mainReducer = combineReducers({
  auth: authReducer,
  navigation: navigationReducer,
  portfolio: portfolioReducer,
  about: aboutReducer,
});

export default mainReducer;
