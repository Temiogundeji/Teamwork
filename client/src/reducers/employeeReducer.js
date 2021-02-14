import { SET_LOGIN_STATE } from '../constants';
import { employeeInitialState } from './initialState';

export const learnerReducer = (state = employeeInitialState, action) => {
    switch (action.type) {
        case SET_LOGIN_STATE:
            return {
                ...state,
                isLoggedIn: true,
                ...action.payload
            };
        default:
            return state;
    }
}