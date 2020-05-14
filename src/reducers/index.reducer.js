import { combineReducers } from "redux";

import authReducer from "./auth.reducer";
import errorReducer from "./error.reducer";
import schoolReducer from "./school.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  schools: schoolReducer,
});
export default rootReducer;
