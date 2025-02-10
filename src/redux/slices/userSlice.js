import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { API } from "../../helper/ApiService";

const initialState = {
  userData: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loading: (state) => {
      state.loading = action;
    },
    getUser: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { loading, getUser } = userSlice.actions;

export const getUserData = () => {
  return async (dispatch) => {
    try {
      const url = "user/profile/v1";
      const { data } = await API.get(url);
      dispatch(getUser(data?.data));
    } catch (error) {
      toast(error.response.data.message);
    }
  };
};

export default userSlice.reducer;
