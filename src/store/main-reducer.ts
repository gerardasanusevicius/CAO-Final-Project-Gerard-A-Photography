import { combineReducers } from 'redux';
import portfolioReducer from './features/portfolio/portfolio-reducer';
import projectsReducer from './features/projects/projects-reducer';
import authReducer from './features/auth/auth-reducer';
import navigationReducer from './features/navigation/navigation-reducer';

const mainReducer = combineReducers({
  portfolio: portfolioReducer,
  projects: projectsReducer,
  auth: authReducer,
  navigation: navigationReducer,
});

export default mainReducer;
