import React, { useState } from "react";
import style from "./Cart.module.css";
import { BsBagDash } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import CartDetail from "../CartDetail/CartDetail";
import { useGlobalContext } from "../../context/AppContext";

const Cart = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
 
  const {showCart, cartToggleHandler} = useGlobalContext();
  
  return (
    <>
      {showCart && (
        <section className={style["cart-overlay"]}>
          <div className={style.cart}>
            <article>
              <button class={style.bag}>
                <BsBagDash size={20} />
                <span>{quantity}</span>
              </button>
              <button className={style.close} onClick={cartToggleHandler}>
                <RxCross1 />
              </button>
            </article>

            <CartDetail />
          </div>
        </section>
      )}
    </>
  );
};

export default Cart;
