import React from "react";
import { uiAction } from "./createUi";
import { cartAction } from "./createCart";

export const fetchCartDetails = () => {
    return async (dispatch) => {

        const fetchDetails = async () => {
            const response = await fetch("https://uphaar-react-default-rtdb.firebaseio.com/cartsItem/cart.json");

            if(!response.ok){
                throw new Error("Error in fetching the data...");
            }

            const data = await response.json();

            return data;
        }
        try{
            const data = await fetchDetails();

            dispatch(cartAction.replaceCart({
                cartItem: data.cartItem || [],
                totalAmount: data.totalAmount,
                totalQuantity: data.totalQuantity,
            }))
        }catch(err){
            console.log("error")
        }
    }
}

export const sendCartDetails = (cart) => {
    return async (dispatch) => {
        dispatch(uiAction.showNotification({
            status: 'processing',
            title: "processing...",
            message: "processing your request..."
        }))
        const sendRequest = async () => {
             const response = await fetch("https://uphaar-react-default-rtdb.firebaseio.com/cartsItem/cart.json",{
                method: "PUT",
                body: JSON.stringify({
                    cartItem: cart.cartItem ,
                    totalAmount: cart.totalAmount,
                    totalQuantity: cart.totalQuantity,
                })
             });
             if(!response.ok){
                 throw new Error("Response Error");
             }
        }

        try{
            await sendRequest();
            dispatch(uiAction.showNotification({
                status: 'success',
                title: "success",
                message: "Sending request successfully...",
            }))
        }catch(err){
            console.log("Error in sending the request...");
            dispatch(uiAction.showNotification({
                status: "error",
                ttle: "error",
                message: "Error in sending request"
            }))
        }
    }
}