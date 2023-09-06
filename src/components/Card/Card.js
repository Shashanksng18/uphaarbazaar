import React from "react";
import style from "./Card.module.css";
const Card = ({children, className}) => {

    const recieveClass = className;
    return(
        <div className={`${recieveClass} ${style.card}`}>
           {children}
        </div>
    )
}

export default Card;