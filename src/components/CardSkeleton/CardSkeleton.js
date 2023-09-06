import React from "react";
import Skeleton from "react-loading-skeleton";
import style from "./CardSkeleton.module.css";

const CardSkeleton = ({cards}) => {
    return(
        Array(cards).fill(0).map((item, index) =>  ( <div className={style['card-skeleton']} style={{padding: '1rem 0'}} key={index+5}>
        <div className={style['left-col']}>
           <Skeleton width={290} height={290} style={{marginBottom: '1rem'}}/>
        </div>
        <div className={style['right-col']}>
             <Skeleton count={3} style={{marginBottom: '0.5rem'}}/>
        </div>
    </div>))
    )
}

export default CardSkeleton;