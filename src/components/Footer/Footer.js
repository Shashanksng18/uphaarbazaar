import React from "react";
import logo from "../../assets/footer_logo.svg";
import { NavLink } from "react-router-dom";
import style from "./Footer.module.css";
import Wrapper from "../Wrapper/Wrapper";
import {BiLogoFacebookCircle,BiLogoTwitter, BiLogoYoutube, BiLogoGooglePlus, BiLogoInstagramAlt} from "react-icons/bi"
const Footer = () => {
    return(
       <footer className={style.footer}>
        <Wrapper className={style['footer-wrapper']}>
          <div className={style['promotion']}>
            <picture>
                <img src={logo} alt="logo"/>
            </picture>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
          </div>
         <div className={style[`about-us`]}>
            <h4>about us</h4>
            <ul>
                <li>
                    <NavLink>
                        careers
                    </NavLink>
                </li>
                <li>
                    <NavLink>
                        our stores
                    </NavLink>
                </li>
                <li>
                    <NavLink>
                        our cares
                    </NavLink>
                </li>
                <li>
                    <NavLink>
                    terms & conditions
                    </NavLink>
                </li>
                <li>
                    <NavLink>
                        privacy policy
                    </NavLink>
                </li>
            </ul>
         </div>
         <div className={style['customer-care']}>
            <h4>cusomer care</h4>
            <ul>
                <li>
                    <NavLink>
                        help center
                    </NavLink>
                </li>
                <li>
                    <NavLink>
                        how to buy
                    </NavLink>
                </li>
                <li>
                    <NavLink>
                        track your order
                    </NavLink>
                </li>
                <li>
                    <NavLink>
                        corporate & bulk purchasing
                    </NavLink>
                </li>
                <li>
                    <NavLink>
                        returns & refunds
                    </NavLink>
                </li>
            </ul>
         </div>
         <div className={style['contact-us']}>
            <h4>contact us</h4>
            <ul>
                <li>
                <address>
             70 Washington Square South, New York, NY 10012, United States
             </address>
                </li>
                <li>
                <a href="mailto: shashanksng18@gmail.com">shashanksng18@gmail.com</a>
                </li>
                <li>
                  <a href="tel: +91 94118266644">+91 9411826542</a>
                </li>
            </ul>
            <ul className={style['social-links']}>
                <li>
                    <NavLink>
                       <BiLogoFacebookCircle/>
                    </NavLink>
                </li>
                 <li>
                    <NavLink>
                       <BiLogoTwitter/>
                    </NavLink>
                 </li>
                 <li>
                    <NavLink>
                        <BiLogoYoutube/>
                    </NavLink>
                 </li>
                 <li>
                    <NavLink>
                       <BiLogoGooglePlus/>
                    </NavLink>
                 </li>
                 <li>
                    <NavLink>
                       <BiLogoInstagramAlt/>
                    </NavLink>
                 </li>
            </ul>
         </div>
          </Wrapper>
       </footer>
    )
}

export default Footer;