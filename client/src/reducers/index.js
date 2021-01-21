//This fill will use combineReducer to combine all the reducers together 
import { combineReducers } from 'redux';
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducers";
import surveysReducer from "./surveyReducer";

export default combineReducers({
    //The return state will have these properties
    auth: authReducer,
    form: reduxForm,
    surveys: surveysReducer,
});