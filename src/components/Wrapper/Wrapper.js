import React from "react";
import style from "./Wrapper.module.css";

const Wrapper = (props) => {

    const recieveClass = props.className;
    return(
        <div className={`${recieveClass} ${style[`wrapper-main`]}`}>
            {props.children}
        </div>
    )
}

export default Wrapper;