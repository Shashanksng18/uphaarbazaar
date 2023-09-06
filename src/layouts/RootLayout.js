import React from "react";
import MainNavigation from "./MainNavigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
const RootLayout = () => {
    return(
        <>
         <MainNavigation/>
         <Outlet/>
         <Footer/>
        </>
    )
}
export default RootLayout;