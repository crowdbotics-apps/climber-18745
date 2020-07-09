import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn51276695Reducer from '../features/SignIn51276695/redux/reducers'
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn51276695: SignIn51276695Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});