import * as actionTypes from "actions/types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SCHOOLS_FETCH_SUCCESS:
    case actionTypes.SCHOOLS_FETCH_ONE_SUCCESS:
      return {
        ...state,
        schools: action.payload,
        loading: true,
      };

    default:
      return state;
  }
}
