import {HiPhotograph} from "react-icons/hi";
import {GiClothesline, GiLargeDress, GiDrill,GiBabyBottle} from "react-icons/gi";
import {LuSofa} from "react-icons/lu";
import {BiFootball} from "react-icons/bi";
import {AiFillCar} from "react-icons/ai";
import {VscWatch} from "react-icons/vsc";
import {TiCamera} from "react-icons/ti"
import {CiRead} from "react-icons/ci";
import {FaTshirt} from "react-icons/fa";

const icons = [
        {
            icon: <FaTshirt size={18}/>,
            title: "men",
        },
        {
            icon: <HiPhotograph size={18}/>,
            title: "Photos",
        },
        {
            icon: <GiClothesline size={18}/>,
            title: "clothes",
        },
        {
            icon: <LuSofa size={18}/>,
            title: "furniture",
        },
        {
            icon: <BiFootball size={18}/>,
            title: "sport"
        },
        {
            icon: <GiLargeDress size={18}/>,
            title: "women",
        },
        {
            icon: <AiFillCar size={18}/>,
            title: "automobile"
        },
        {
            icon: <VscWatch size={18}/>,
            title: "accessories",
        },
        {
            icon: <TiCamera size={18}/>,
            title: "electronics",
        },
        {
            icon: <GiDrill size={18}/>,
            title: "hardware",
        },
        {
            icon: <CiRead size={18}/>,
            title: "cosmetics"
        },
        {
            icon: <GiBabyBottle size={18}/>,
            title: "baby products",
        }
    ]

export default icons;