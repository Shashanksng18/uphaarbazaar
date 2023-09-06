import React, { useLayoutEffect, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import style from "./Icons.module.css";
import {FaTshirt} from "react-icons/fa";
import {HiPhotograph} from "react-icons/hi";
import {GiClothesline, GiLargeDress, GiDrill,GiBabyBottle} from "react-icons/gi";
import {LuSofa} from "react-icons/lu";
import {BiFootball} from "react-icons/bi";
import {AiFillCar} from "react-icons/ai";
import {VscWatch} from "react-icons/vsc";
import {TiCamera} from "react-icons/ti"
import {CiRead} from "react-icons/ci";
import icons from "../../utils/helpers/icons";

const Icons = () => {

    const [activeIcon, setActiveIcon] = useState(0);
    const [iconsUphaar, setIconsUphaar] = useState([]);
    useLayoutEffect(() => {
         setIconsUphaar(icons);
    }, [])
    return(
           <ul className={style.icons}>
             {iconsUphaar.map((icon, index) => (
                <li onClick={() => setActiveIcon(index)} className={`${index===activeIcon && style.active} `} key={index+1}>
                    <div>{icon.icon}</div>
                    {icon.title}
                </li>
             ))}
           </ul>
    )
}
export default Icons;