import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import vehicleReducer from "./slices/vehicleSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    vehicle: vehicleReducer,
  },
});
