import {CHANGE_LOGIN} from "../actions/auth";
import {SUBMIT_LOGIN} from "../actions/auth";

const initialState = {
    login: '',
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LOGIN:
            return {
                ...state,
                login: action.login,
            };
        case SUBMIT_LOGIN:
            return state;
        default:
            return initialState;
    }
};
