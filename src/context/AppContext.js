import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [productId, setProductid] = useState(null);
    const [currentProductDetail, setCurrentProductDetail] = useState({});
    const [detailOverlay, setDetailOverlay] = useState(false);
    const [showCart, setShowCart] = useState(false);
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