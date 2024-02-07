import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("data")) || {
  data: {
    name: "",
    email: "",
    phone: "",
  },
  plan: {
    value: "",
    yearly: false,
  },
  addons: {
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  },
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    handleInput: (state, actions) => {
      state.data[actions.payload.name] = actions.payload.value;
    },
    handleRadio: (state, actions) => {
      state.plan.value = actions.payload.value;
    },
    handleYearly: (state, actions) => {
      state.plan.yearly = actions.payload.value;
    },
    handleCheckbox: (state, actions) => {
      state.addons[actions.payload.name] = actions.payload.value;
    },
  },
});

export const { handleInput, handleRadio, handleYearly, handleCheckbox } =
  userDataSlice.actions;

export default userDataSlice.reducer;
