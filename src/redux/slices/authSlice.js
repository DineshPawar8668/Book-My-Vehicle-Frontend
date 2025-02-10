import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { API } from "../../helper/ApiService";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const initialState = {
  loading: false,
  loginUser: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loading: (state, action) => {
      state.loading = action.payload;
    },
    login: (state, action) => {
      state.loginUser = action.payload;
    },
  },
});

export const { loading, login } = authSlice.actions;


export const loginUser = (formData, navigate) => {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const url = `${BASE_URL}auth/login/v1`;
      const {data} = await axios.post(url, formData);
      dispatch(login(data));
      console.log(data);
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      toast("Login successfully");
      dispatch(loading(false));
      navigate("/");
    } catch (error) {
      toast(error.response.data.message);
    }
  };
};

export const registerUser = (formData, navigate) => {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const url = `${BASE_URL}auth/register/v1`;
      const data = await axios.post(url, formData);
      dispatch(login(data));
      dispatch(loading(false));
      toast("Register successfully");
      navigate("/login");
    } catch (error) {
      toast(error.response.data.message);
    }
  };
};

export default authSlice.reducer;
