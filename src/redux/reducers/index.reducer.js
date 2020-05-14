import { combineReducers } from "redux";

import authReducer from "./auth.reducer";
import errorReducer from "./error.reducer";
import schoolReducer from "./school.reducer";
import apiReducer from "./api.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  schoolReducer,
  apiReducer,
});
export default rootReducer;
