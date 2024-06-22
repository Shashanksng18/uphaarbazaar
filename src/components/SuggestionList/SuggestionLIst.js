import React, { useRef, useState } from "react";
import { useGlobalContext } from "../../context/AppContext";
import style from "./SuggestionList.module.css";

const SuggestionList = ({selectHandler}) => {

    const {inputCategory, setInputCategory, setCurrentCategory} = useGlobalContext();

    return(
        <ul className={style['suggestion-list']}>
            {inputCategory.map((item) => (
                <li onClick={()=>(setCurrentCategory(item.title), selectHandler(item.title))}>{item.title}</li>
            ))}
        </ul>
    )
}

export default SuggestionList;