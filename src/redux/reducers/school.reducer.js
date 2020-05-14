import * as actionTypes from "redux/actions/types";

const initialState = {
  schools: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SCHOOLS_FETCH_LOADING:
      return { ...state, loading: true };
    case actionTypes.SCHOOLS_FETCH_SUCCESS:
      return action.schools;
    case actionTypes.SCHOOLS_FETCH_ONE_SUCCESS:
      return {
        ...state,
        school: action.payload,
      };

    default:
      return state;
  }
}
