import React, { useState } from "react";
import style from "./CartDetail.module.css";
import { RxCross1 } from "react-icons/rx";
import { useGlobalContext } from "../../context/AppContext";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../store/createCart";
const CartDetail = () => {
    const dispatch = useDispatch();
    let cartProduct = useSelector((state) => state.cart.cartItem);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const addProductHandler = (product) => {
        dispatch(cartAction.addToCart(product));
    }

    const removeProductHanlder = (product) => {
        dispatch(cartAction.removeFromCart(product))
    }
   
    return(
        <div className={style["cart-detail"]}>
          {cartProduct.length===0 && <p className={style.empty}>your cart is empty</p>}
            <>{cartProduct.length > 0 && cartProduct?.map((product, index) => (
                 <div className={style['cart-inner-detail']} key={index+30}>
                 <div className={style['controls']}>
                   <button className={style.cbtn} onClick={()=>addProductHandler(product)}>+</button>
                   <button className={style.cbtn}>1</button>
                   <button className={style.cbtn} onClick={()=>removeProductHanlder(product)}>-</button>
                 </div>
                 <div className={style['cart-info']}>
                   <picture>
                     <img src={product.image} alt="none"/>
                   </picture>
                   <div className={style['product-desc']}>
                     <h1 className={style.title}>{product.title}</h1>
                     <p className={style.quantity}>{product.quantity} * {product.price}</p>
                     <p className={style.totalprice}>${product.totalPrice}</p>
                   </div>
                 </div>
                 <div>
                   <RxCross1 />
                 </div>
               </div>
            ))}
            </>
            <div className={style.total}>
               <h2>total : </h2><span>${totalAmount}</span>
            </div>
      </div>
    )
}

export default CartDetail;