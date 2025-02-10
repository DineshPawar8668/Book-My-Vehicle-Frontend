import { createSlice } from "@reduxjs/toolkit";
import { API } from "../../helper/ApiService";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  vehicleList: [],
};

const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    loading: (state, action) => {
      state.loading = action.payload;
    },
    getVehicles: (state, action) => {
      state.vehicleList = action.payload;
    },
  },
});

export const { loading, getVehicles } = vehicleSlice.actions;

export const getVehiclelist = () => {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const url = "vehicle/user/list/v1";
      const { data } = await API.get(url);
      dispatch(getVehicles(data?.data));
      dispatch(loading(false));
    } catch (error) {
      toast(error?.response?.data?.message);
      dispatch(loading(false));
    }
  };
};

export default vehicleSlice.reducer;
