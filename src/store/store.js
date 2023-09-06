import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import createCart from "./createCart";
import createUi from "./createUi";

const store = configureStore({
    reducer: {cart: createCart, ui: createUi}
})

export default store;