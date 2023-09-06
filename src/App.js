import React, { useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import ErrorPage from "./pages/Error/ErrorPage";
import Home from "./pages/Home/Home";
import {loader as uphaarProducts} from "./components/Products/Products";
import ProductDetail, {loader as productDetailLoader} from "./pages/ProductDetail/ProductDetail";
import Skeleton from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchCartDetails, sendCartDetails } from "./store/cartActions";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true, element: <Home/>        
      },
      {
        path: '/product-detail/:id', element: <ProductDetail/>,loader: productDetailLoader
      }
    ]
  }
])

let initial = true;
const App = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {

     if(initial){
       initial = false;
       return;
     }
     if(cart.change){
      dispatch(sendCartDetails(cart));
     }
  }, [cart, dispatch])

  useEffect(() => {
    dispatch(fetchCartDetails(cart))
  }, [dispatch])
  return  <RouterProvider router={router}/>
}

export default App;