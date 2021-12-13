import { USERNAME_CHANGED, PASSWORD_CHANGED, SHOW_SPINNER, REF_CODE_CHANGED, OWNER_NAME_CHANGED, PHONE_NUMBER_CHANGED, ADD_LICENSE_IMAGE, DELETE_LICENSE_IMAGE } from './types';

export const userNameChanged = (text) => {
    return {
        type: USERNAME_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ username, password }) => {
    //redux-thunk is installed and configured the App.js file using applyMiddleware => for call api
    return (dispatch) => {
        dispatch({ type: SHOW_SPINNER });
    };
};

export const refCodeChanged = (text) => {
    return {
        type: REF_CODE_CHANGED,
        payload: text
    };
};

export const ownerNameChanged = (text) => {
    return {
        type: OWNER_NAME_CHANGED,
        payload: text
    };
};

export const phoneNumberChanged = (text) => {
    return {
        type: PHONE_NUMBER_CHANGED,
        payload: text
    };
};
export const addLicenseImage = (image) => {
    return {
        type: ADD_LICENSE_IMAGE,
        payload: image
    };
};

export const removeLicenseImage = (image) => {
    return {
        type: DELETE_LICENSE_IMAGE,
        payload: image
    };
};


export const registerUser = ({ refCode, ownerName, phoneNumber, username, password, licenseImages }) => {
    //redux-thunk is installed and configured the App.js file using applyMiddleware => for call api
    return (dispatch) => {
        dispatch({ type: SHOW_SPINNER });
    };
};