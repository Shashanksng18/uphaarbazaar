import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState = {
    notification: null,
}
const createUi = createSlice({
    name: "ui",
    initialState: initialState,
    reducers: {
        showNotification(state, action){
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            }
        }
    }
})

export default createUi.reducer;

export const uiAction = createUi.actions;