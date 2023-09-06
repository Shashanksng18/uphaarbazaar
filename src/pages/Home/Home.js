import React, { useEffect, useState } from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import style from "./Home.module.css";
import Icons from "../../components/IconsMenu/Icons";
import products from "../../utils/helpers/products";
import { useLoaderData } from "react-router-dom";
import Products from "../../components/Products/Products";
import Pagination from "../../components/Pagination/Pagination";
import HomePageProductDetail from "../../components/ProductDetail/HomePageProductDetail";
import Cart from "../../components/Cart/Cart";
const Home = () => {

    const [userInfo, setUserInfo] = useState([]);


    useEffect(() => {
        const getLocation = async () => {
            navigator.geolocation.getCurrentPosition(async (position) => {
               const {latitude, longitude} = position.coords;

               const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
               const location = await response.json();
               setUserInfo({city: location.address.city, country: location.address.country});
               
            })
        }
        getLocation();
   }, [])

   console.log(userInfo);
    
    return(
        <Wrapper>
            <Icons/>
            <Products/>
            <HomePageProductDetail/>
            <Cart/>
            <Pagination/>
        </Wrapper>
    )
}

export default Home;

