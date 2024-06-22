import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import {AiOutlineUser, AiOutlineShoppingCart, AiOutlineSearch} from "react-icons/ai";
import {RxCross1} from "react-icons/rx";
import style from "./Navbar.module.css";
import Wrapper from "../Wrapper/Wrapper";
import {BsChevronDown} from "react-icons/bs";
import { useGlobalContext } from "../../context/AppContext";
import { useSelector } from "react-redux";
import icons from "../../utils/helpers/icons";
import SuggestionList from "../SuggestionList/SuggestionLIst";
const categories = [
    "all",
    "men",
    "photos",
    "electronics",
    "baby",
    "kitchen",
    "women",
    "sport"
]
const BottomNavbar = () => {
    const [toggleCategory, setToggleCategory] = useState(false);
    const [show, setShow] = useState(false);
    const inputRef = useRef('');
    // const [currentCategory, setCurrentCategory] = useState("All Category");

    const {currentCategory, setCurrentCategory, inputCategory, setInputCategory} = useGlobalContext();
    const [search, setIsSearch] = useState(false);

    const {cartToggleHandler} = useGlobalContext();
    const [currentSearch, setCurrentSearch] = useState("");
    const totalQuantity = useSelector((state) => state.cart.totalQuantity)
    const handleToggle = () => {
        setToggleCategory(!toggleCategory);
    }

    const suggestionCategory = () => {
        const value = inputRef.current.value.toLowerCase();
        if(!value) {
            setInputCategory(icons);
            setShow(false);
        }
        else {
            setShow(true)
            setInputCategory((prev) => prev.filter((item) => item.title.includes(value)))
        }
        
    }

    const selectHandler = (title) => {
        setCurrentSearch(title);
    }
    
    return(
        <Wrapper>
            <nav className={style['bottom-nav']}>
            <section className={style.links}>
                <div>
                    <NavLink>
                        <img src={logo} alt="logo"/>
                    </NavLink>
                </div>
                <div>
                    {/* style={search ? {display: "inline-flex"}: {display: "none"}} */}
                <form  className={`${style.sform} ${search ? `${style.form}`: `${style.formvisible}`}`}>
                        <div className={style['search-form']}>
                            <input type="search" placeholder="searching for..." className={style.search} ref={inputRef} onChange={suggestionCategory}/>
                            {show && <SuggestionList selectHandler={selectHandler}/>}
                            {/* <RxCross1 className={style.close} onClick={() => setIsSearch(false)}/> */}
                        </div>
                        <div className={style.category} onClick={handleToggle}>
                            <span className={style.select} >{currentCategory}</span>
                            <BsChevronDown size={14}/>
                            {toggleCategory && <div className={style.option}>
                            {categories.map((category) => (
                                <li onClick={()=>setCurrentCategory(category)}>
                                    {category}
                                </li>
                            ))}
                            </div>
                            }
                        </div>
                    </form>
                </div>
                <div className={style.icons}>
                    {/* <button className={style['search-icon']}>
                        <AiOutlineSearch size={20} className={style.search} onClick={() => setIsSearch(!search)}/>
                    </button> */}
                    <button className={style.user}>
                       <AiOutlineUser size={20}/>
                    </button>
                    <button className={style.cart} onClick={cartToggleHandler}>
                       <span>{totalQuantity}</span>
                       <AiOutlineShoppingCart size={20}/>
                    </button>
                </div>
            </section>
        </nav>
        </Wrapper>
    )
}

export default BottomNavbar;