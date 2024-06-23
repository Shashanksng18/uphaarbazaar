import React, { useLayoutEffect, useRef, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import style from "./Icons.module.css";
import icons from "../../utils/helpers/icons";
import { useGlobalContext } from "../../context/AppContext";

const Icons = () => {

    // const [activeIcon, setActiveIcon] = useState(0);
    const [iconsUphaar, setIconsUphaar] = useState([]);

    const {setCurrentCategory, setFlushProduct, activeIcon, setActiveIcon} = useGlobalContext();
    useLayoutEffect(() => {
         setIconsUphaar(icons);
    }, [])

    
    return(
           <ul className={style.icons}>
             {iconsUphaar.map((icon, index) => (
                <li onClick={() => {setActiveIcon(index); setCurrentCategory(icon.title); setFlushProduct(true) }}  className={`${index===activeIcon && style.active} `} key={index+1} >
                    <div>{icon.icon}</div>
                    <span>{icon.title}</span>
                </li>
             ))}
           </ul>
    )
}
export default Icons;