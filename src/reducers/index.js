import { combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import RegisterReducer from './RegisterReducer';

export default combineReducers({
    loginAuth: AuthReducer,
    registrationAuth: RegisterReducer,
});