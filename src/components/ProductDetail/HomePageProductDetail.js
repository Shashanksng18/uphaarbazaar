import React, { useEffect, useState } from "react";
import style from "./HomePageProductDetail.module.css";
import { useGlobalContext } from "../../context/AppContext";
import { AiFillCloseCircle, AiFillStar, AiOutlineStar } from "react-icons/ai";
import {GrClose} from "react-icons/gr";
const HomePageProductDetail = () => {
    const {detailOverlay, handleDetailOverlay, currentProductDetail} = useGlobalContext();
    const {image, price, star, title, pId } = currentProductDetail;

    
    return(
       <section>
         {detailOverlay && <div className={style[`home_detailPage`]}>
           <div className={style.detail}>
             <button  className={style.close} onClick={()=>handleDetailOverlay()}>
             <GrClose size={18}/>
             </button>
             <div className={style['col-left']}>
                <picture>
                    <img src={image} alt={pId}/>
                </picture>
            </div>
            <div className={style['col-right']}>
                <h2>{title}</h2>
                <p>category: uphaar product</p>
                <h1 className={style.price}>${price}</h1>
                {Array(5).fill(0).map((istar, index) => (
                    index + 1 <= star ? <AiFillStar  style={{color: 'yellow'}} key={index+12}/> : <AiOutlineStar style={{color: '#ddd'}} key={index+13}/>
                ))}<span>(50)</span>

                <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.</p>
                <button className={style[`cart-btn`]}>add to cart</button>
            </div>           
           </div>
           </div>}
       </section>
    )
}

export default HomePageProductDetail;