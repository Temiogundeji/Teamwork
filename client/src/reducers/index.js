import { combineReducer } from 'redux';
import { employeeReducer } from './employeeReducer';

export const rootReducer = combineReducer({
    employee: employeeReducer
});