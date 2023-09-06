import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./MainNavigation.module.css";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlinePlus,
  AiOutlineMinus,
  AiFillLinkedin
} from "react-icons/ai";
import BottomNavbar from "../components/Navbar/BottomNavbar";
import Wrapper from "../components/Wrapper/Wrapper";
const MainNavigation = () => {

  const [navMenu, setNavMenu] = useState(false);

  const showMenuHandler = (e) => {
    e.preventDefault();
    setNavMenu(!navMenu);
  }
  return (
    <header>
      <nav className={style['top-header']}>
        <Wrapper>
        <ul className={style[`main-navigation`]}>
          <ul className={style[`left-navigation`]}>
            <li>
              <NavLink to="/" className={style.hot}>
                hot
              </NavLink>
              <button className={style.plus} onClick={(e) => showMenuHandler(e)}>
                  {navMenu ? <AiOutlineMinus size={18}/> : <AiOutlinePlus size={18}/>}
              </button>
              
            </li>
            <li className={style.shipping}>free express shipping</li>
          </ul>
          {/* style={navMenu ? {display: "inline-flex"}:{display: "none"} } */}
          <>{navMenu && <ul className={style[`right-navigation`]} >
            <li>
              <NavLink>
                 <AiFillLinkedin size={16}/>
              </NavLink>
            </li>
            <li>
              <NavLink>
                <AiOutlineTwitter size={16} />
              </NavLink>
            </li>
            <li>
              <NavLink>
                <AiFillFacebook size={16} />
              </NavLink>
            </li>
            <li>
              <NavLink>
                <AiOutlineInstagram size={16} />
              </NavLink>
            </li>
          </ul>}
          </>
        </ul>
        </Wrapper>
      </nav>
      <BottomNavbar/>
    </header>
  );
};

export default MainNavigation;
