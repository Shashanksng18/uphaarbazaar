import React, { useEffect, useRef, useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import products from "../../utils/helpers/products";
import {AiOutlinePlus,AiFillStar, AiOutlineStar} from "react-icons/ai";
import style from "./Product.module.css";
import Card from "../Card/Card";
import {AiFillEye, AiOutlineHeart} from "react-icons/ai";
import { useGlobalContext } from "../../context/AppContext";
import CardSkeleton from "../CardSkeleton/CardSkeleton";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/createCart";


const Products = () => {
    const dispatch = useDispatch();

    
    const navigate = useNavigate();
    const [uphaarProducts, setUphaarProducts] = useState([]);
    const {currentPage, getProductId, getProductDetail, handleDetailOverlay, setGetProductSize, currentCategory, flushProduct, setFlushProduct} = useGlobalContext();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
      const fetchProducts = async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos?_page=${currentPage}&_limit=200`
        );
        if(!response.ok){
          throw new Error("Cannot fetch the product check your connection...")
        }
        const data = await response.json();
        let companyProducts = [];

        for (let i = 0; i < products.length; i++) {
          for (let j = 0; j < data.length; j++) {
            if (data[j].id === products[i].pId) {
              companyProducts.push(products[i]);
            }
          }
        }

        // console.log("PP", comp)
      
       companyProducts = currentCategory !== 'all' ? companyProducts.filter((product) => product.category?.includes(currentCategory === 'baby products' ? currentCategory.split(' ')[0] : currentCategory)) : companyProducts;
       setGetProductSize(companyProducts.length);
       setUphaarProducts(companyProducts);
       setIsLoading(false);
      }

      
      fetchProducts();
    }, [currentPage, currentCategory]);

    const getProductIdHandler = (id) => {
        getProductId(id)
        navigate(`/product-detail/${id}`)
    }

    const addToCartHandler = (product) => {
       dispatch(cartAction.addToCart(product))
    }
    
    useEffect(() => {
      setTimeout(() => {
        setFlushProduct(false);
      },1000)
    })

    // const colorRef = useRef(null);

    // const heartColorHandler = () => {
    //    const target = colorRef.current;
    //    console.log(target)
    // }
    return(
        <div className={style['product-main']}>
           {
             flushProduct &&  <div className={style['spinner-area']}>
             <span className={style.loader}></span>
           </div>
           }
           {isLoading &&  <CardSkeleton cards={200}/>}
           {uphaarProducts.length === 0 && <p className={style['no-product']}>OOps.... No Product Found for this Category</p>}
           {!isLoading && <>  {uphaarProducts.map((product, index) => (
                 <Card className={style['individual-card']} key={index+2}>
                  <picture onClick={()=>getProductIdHandler(product.pId)}>
                    <img src={product.image} alt={product.pId}/>
                  </picture>
                  <div className={style['hover-icons']}>
                     <AiFillEye size={18} onClick={()=>{getProductDetail(product); handleDetailOverlay()}}/>
                     <AiOutlineHeart size={18} />
                  </div>
                  <div className={style[`product-detail`]}>
                  <h4 onClick={()=>getProductIdHandler(product.id)}>{product.title}</h4>
                    {[1,2,3,4,5].map((star, index) => (
                        <>
                         {star <=product.star ? <AiFillStar size={18} style={{color: "#FFFF00"}} key={index+15}/>:<AiOutlineStar size={18} style={{color: "#ccc"}} key={index+16}/>}
                        </>
                    ))}
                    <p>${ product.price}.00</p>
                    <button className={style.btn} onClick={() => addToCartHandler(product)}><AiOutlinePlus size={20}/></button>
                  </div>
                </Card>
                
            ))}
            </>}
        </div>
    )
}

export default Products;

// export const loader = async ({request, params}) => {

//   const id = params.id;
//     const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
//     console.log("response",response);
//     const data = await response.json();
//     console.log("data", data)
//     let companyProducts = [];
//     console.log("D",data);
   

//     for(let i=0; i<products.length; i++){
//         for(let j=0;j<data.length; j++){
//             if(data[j].id === products[i].pId){
//                 companyProducts.push(products[i])
//            }
//         }
//     }
//     return companyProducts;
// }