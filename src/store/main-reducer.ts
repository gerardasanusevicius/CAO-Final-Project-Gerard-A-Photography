import { combineReducers } from 'redux';
import portfolioReducer from './features/portfolio/portfolio-reducer';
import aboutReducer from './features/about/about-reducer';
import authReducer from './features/auth/auth-reducer';
import navigationReducer from './features/navigation/navigation-reducer';

const mainReducer = combineReducers({
  portfolio: portfolioReducer,
  about: aboutReducer,
  auth: authReducer,
  navigation: navigationReducer,
});

export default mainReducer;
