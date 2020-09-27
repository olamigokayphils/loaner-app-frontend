import { GET_DASHBOARD } from "../rootAction/types";

const initialState = {
  userDashboard: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DASHBOARD:
      return {
        ...state,
        userDashboard: action.payload,
      };
    default:
      return state;
  }
}
