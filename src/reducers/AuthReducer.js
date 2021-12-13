import { USERNAME_CHANGED, PASSWORD_CHANGED, SHOW_SPINNER } from '../actions/types';

const INITIAL_STATE = { 
    username: '', 
    password:'',
    user: null,
    loading: false, 
    error: ''
 };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USERNAME_CHANGED:
            return { ...state, username: action.payload, loading: false, error: ''};
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload, loading: false, error: '' };
        case SHOW_SPINNER:
            return { ...state, loading: true, error:'' };
        default:
            return state;
    }
};