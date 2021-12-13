import { REF_CODE_CHANGED, OWNER_NAME_CHANGED, PHONE_NUMBER_CHANGED, USERNAME_CHANGED, PASSWORD_CHANGED, SHOW_SPINNER, ADD_LICENSE_IMAGE, DELETE_LICENSE_IMAGE } from '../actions/types';

const INITIAL_STATE = {
    refCode: '',
    ownerName: '',
    phoneNumber: '',
    username: '',
    password: '',
    user: null,
    loading: false,
    error: '',
    licenseImages: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REF_CODE_CHANGED:
            return { ...state, refCode: action.payload, loading: false, error: '' };
        case OWNER_NAME_CHANGED:
            return { ...state, ownerName: action.payload, loading: false, error: '' };
        case PHONE_NUMBER_CHANGED:
            return { ...state, phoneNumber: action.payload, loading: false, error: '' };
        case USERNAME_CHANGED:
            return { ...state, username: action.payload, loading: false, error: '' };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload, loading: false, error: '' };
        case ADD_LICENSE_IMAGE:
            const newArray = [...state.licenseImages];
            newArray.push(action.payload);
            return { ...state, licenseImages: newArray, loading: false, error: '' };
        case DELETE_LICENSE_IMAGE:
            var imageArray = [...state.licenseImages];
            var index = imageArray.indexOf(action.payload)
            if (index !== -1) {
                imageArray.splice(index, 1);
            }
            return { ...state, licenseImages: imageArray, loading: false, error: '' };
        case SHOW_SPINNER:
            return { ...state, loading: true, error: '' };
        default:
            return state;
    }

}