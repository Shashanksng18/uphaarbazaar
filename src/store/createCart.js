import { createSlice } from "@reduxjs/toolkit";
import React from "react";

let initialState = {
    cartItem: [],
    totalAmount: 0,
    totalQuantity: 0,
    change: false,
}
const createCart = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        replaceCart(state, action){
            state.cartItem = action.payload.cartItem;
            state.totalAmount = action.payload.totalAmount;
            state.totalQuantity = action.payload.totalQuantity;
        },
        addToCart(state, action){
            const ritem = action.payload;
            state.change = true;

            const existingItem = state.cartItem?.find((item) => item.pId === ritem.pId);
            const newItem = {
                pId: ritem.pId,
                title: ritem.title,
                price: ritem.price,
                quantity: 1,
                image: ritem.image,
                totalPrice: ritem.price,
            }

            if(!existingItem){
                state.cartItem?.push(newItem);
                state.totalAmount += ritem.price;
                state.totalQuantity += 1;
            }
            if(existingItem){
                existingItem.totalPrice += existingItem.price;
                existingItem.quantity += 1;
                state.totalAmount += existingItem.price;
            }
        },
        removeFromCart(state, action){
           const ritem = action.payload;
           state.change = true;
           
           const existingItem = state.cartItem.find((item) => item.pId === ritem.pId);
           if(existingItem.quantity === 1){
              state.cartItem = state.cartItem.filter((item) => item.pId !== ritem.pId);
              state.totalAmount -= existingItem.price;
              state.totalQuantity -= 1;
           }
           if(existingItem.quantity > 1){
              existingItem.totalPrice -= existingItem.price;
              existingItem.quantity -= 1;
              state.totalAmount -= existingItem.price;
           }
        }
    }
})

export default createCart.reducer;

export const cartAction = createCart.actions;