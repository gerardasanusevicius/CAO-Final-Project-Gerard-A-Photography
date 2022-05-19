import { combineReducers } from 'redux';
import authReducer from './features/auth/auth-reducer';
import navigationReducer from './features/navigation/navigation-reducer';
import reduxTestReducer from './features/redux-test/redux-test-reducer';

const mainReducer = combineReducers({
  auth: authReducer,
  navigation: navigationReducer,
  reduxTest: reduxTestReducer,
});

export default mainReducer;
