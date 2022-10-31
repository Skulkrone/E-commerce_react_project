// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducer/cartReducer";

// const store = create(cartReducer);

const store = configureStore({reducer: cartReducer});

export default store;
