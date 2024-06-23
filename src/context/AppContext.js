import React, { createContext, useContext, useState } from "react";
import icons from "../utils/helpers/icons";

const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [productId, setProductid] = useState(null);
    const [currentProductDetail, setCurrentProductDetail] = useState({});
    const [detailOverlay, setDetailOverlay] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [getProductSize, setGetProductSize] = useState(0);
    const [currentCategory, setCurrentCategory] =useState("men");
    const [flushProduct,  setFlushProduct] = useState();
    const [inputCategory, setInputCategory] = useState(icons);
    const [activeIcon, setActiveIcon] = useState(0);

    const handleCurrentPage = (page) => {
        setCurrentPage(page)
    }
    const getProductId = (id) => {
        setProductid(id);
    }
    // Home Page eye product detail on onclick
    const getProductDetail = (product) => {
        setCurrentProductDetail(product);
    }
    const handleDetailOverlay = () => {
        setDetailOverlay(!detailOverlay);
    }

    const cartToggleHandler = () => {
        setShowCart(!showCart);
    }
    return(
        <AppContext.Provider
        value={{
            currentPage,
             handleCurrentPage,
             productId,
             getProductId,
             getProductDetail,
             currentProductDetail,
             handleDetailOverlay,
             detailOverlay,
             cartToggleHandler,
             showCart,
             setGetProductSize,
             getProductSize,
             currentCategory,
             setCurrentCategory,
             flushProduct,
             setFlushProduct,
             inputCategory,
             setInputCategory,
             activeIcon,
             setActiveIcon
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export default AppContext;