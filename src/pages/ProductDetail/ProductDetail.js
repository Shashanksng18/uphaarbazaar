import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/AppContext";
import { useLoaderData } from "react-router-dom";
import products from "../../utils/helpers/products";
import Card from "../../components/Card/Card";
import {AiFillEye, AiFillStar, AiOutlineHeart, AiOutlineStar} from "react-icons/ai";
import style from "./ProductDetail.module.css";
import Wrapper from "../../components/Wrapper/Wrapper";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/createCart";
import Cart from "../../components/Cart/Cart";
const ProductDetail = () => {
    const detailProduct = useLoaderData();
    const [activeOption, setActiveOption] = useState(0);
    const [activeType, setActiveType] = useState(0);
    const [activeImage, setActiveImage] = useState(0);

    const dispatch = useDispatch();
    
    const optionColorHandler = (optionValue) => {
        setActiveOption(optionValue);
    }
    const valueColorHandler = (activeType) => {
        setActiveType(activeType);
    }
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    const addProductHandler = (detailProduct) => {
        dispatch(cartAction.addToCart(detailProduct));
    }
    return(
        <Wrapper>
        <Cart/>
         <div className={style['product-detail']}>
           <div className={style['left']}>
           <picture>
              <img src={detailProduct[0].image} alt={detailProduct[0].pId}/>
           </picture>
           </div>
           <div className={style['right']}>
           <div className={style['product-desc']}>
              <h2>{detailProduct[0].title}</h2>
              <p>brand : <span>xiomi</span></p>
              <div className={style.star}><p>rated</p>{[1,2,3,4,5].map((star) => {
               return  star <= detailProduct[0].star ? <AiFillStar style={{color: "#FFF000"}}/> : <AiOutlineStar style={{color: "#ccc"}}/>
              })}<span>(50)</span>
              </div>
           </div>
           <div className={style['option']}>
              <h4>option</h4>
              <ul >
                <li onClick={(e)=>{optionColorHandler(0)}} style={activeOption === 0 ? {backgroundColor: '#D23F57', color: "#FFF"}: {}}>option 1</li>
                <li onClick={(e)=>optionColorHandler(1)} style={activeOption === 1 ? {backgroundColor: '#D23F57', color: "#FFF"}: {}}>option 2</li>
                <li onClick={(e)=>optionColorHandler(2)} style={activeOption === 2 ? {backgroundColor: '#D23F57', color: "#FFF"}: {}}>option 3</li>
                <li onClick={(e)=>optionColorHandler(3)} style={activeOption === 3 ? {backgroundColor: '#D23F57', color: "#FFF"}: {}}>option 4</li>
              </ul>
           </div>
           <div className={style['type']}>
             <h4>type</h4>
             <ul>
                <li onClick={(e) => valueColorHandler(0)} style={activeType === 0 ? {backgroundColor: '#D23F57', color: "#FFF"}: {}}>type 1</li>
                <li onClick={(e) => valueColorHandler(1)} style={activeType === 1 ? {backgroundColor: '#D23F57', color: "#FFF"}: {}}>type 2</li>
                <li onClick={(e) => valueColorHandler(2)} style={activeType === 2 ? {backgroundColor: '#D23F57', color: "#FFF"}: {}}>type 3</li>
             </ul>
           </div>
           <div className={style.price}>
               <h2>${detailProduct[0].price}</h2>
               <p>stock available</p>
           </div>
           <button className={style.btn} onClick={() => addProductHandler(detailProduct[0])}>add to cart</button>
           <p className={style.sold}>sold by: uphaar bazaar</p>
       </div>
       </div>
        <div className={style['product-images']}>
            {Array(3).fill(0).map((item, index) => (
                 <picture onClick={()=>setActiveImage(index)} style={index === activeImage ?{border: '1px solid #D23F57'}: {}} key={index+2}>
                    <img src={detailProduct[0].image} alt="product_image"/>
                 </picture>
            ))}
        </div>
        <ProductDescription/>
        </Wrapper>
    )
}

export default ProductDetail;

export const loader = async ({request, params}) => {
    const {id} = params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    let data = await response.json();
    
    const product = [];
    for(let i=0; i<products.length;i++){
       if(data.id === products[i].pId){
          product.push(products[i]);
       }
    }
    return product;
}