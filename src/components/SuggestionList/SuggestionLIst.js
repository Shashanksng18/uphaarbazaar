import React, { useRef, useState } from "react";
import { useGlobalContext } from "../../context/AppContext";
import style from "./SuggestionList.module.css";
import icons from "../../utils/helpers/icons";

const SuggestionList = ({selectHandler}) => {

    const {inputCategory, setInputCategory, setCurrentCategory, setActiveIcon, setFlushProduct} = useGlobalContext();


    const activeIconHandler = (item) => {
        const res = icons.map((item1, index) => item1.title === item.title && index);
        let result = res.filter((item) => item !==false);
        setActiveIcon(result[0]);
        setFlushProduct(true);
    }

    return(
        <ul className={style['suggestion-list']}>
            {inputCategory.map((item, index) => (
                <li onClick={()=>{setCurrentCategory(item.title); selectHandler(item.title); activeIconHandler(item)}}>{item.title}</li>
            ))}
        </ul>
    )
}

export default SuggestionList;