import { globalConstants } from '../constants/globalConstants';
import { retrieveDataFromLocalStorage } from '../helpers';

export const employeeInitialState = {
    accountType: globalConstants.EMPLOYEE,
    isLoggedIn: false,
    id: null,
    ...retrieveDataFromLocalStorage("employee")
};