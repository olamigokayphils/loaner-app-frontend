import axios from "axios";
import { GET_DASHBOARD } from "../rootAction/types";
import { returnErrors } from "../rootAction/messages";

import { BASE_URL } from "../rootAction/env";
import { tokenConfig } from "../authentication/action";

//GET USER DASHBORD
export const getUserDashboard = () => (dispatch, getState) => {
  axios
    .get(`${BASE_URL}/dashboard`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_DASHBOARD,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
