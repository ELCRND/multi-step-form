import { configureStore } from "@reduxjs/toolkit";
import userData from "./features/userData/userDataSlice";
export const store = configureStore({
  reducer: {
    userData,
  },
});
