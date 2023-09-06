import React, { useState } from "react";
import style from "./ProductDescription.module.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import t1 from "../../assets/testimonial_1.png";
import t2 from "../../assets/testimonial_2.png";
import t3 from "../../assets/testimonial_3.png";

const reviews = [
    {
        name: 'jannie schumm',
        star: 5,
        year: 2.6,
        image: t1,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.',
    },
    {
        name: 'joe kenan',
        star: 5,
        year: 4.2,
        image: t2,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.',
    },
    {
        name: 'jenifer tulio',
        star: 5,
        year: 2.7,
        image: t3,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.',
    }
]
const ProductDescription = () => {
    const [isDescriptionActive, setIsDescriptionActive] = useState(true);
    const [isReviewActive, setIsReviewActive] = useState(false);

    const showDescriptionHandler = (e) => {
        const target = e.target.textContent.toLowerCase();
        console.log(target)
        if(target === 'reviews'){
            setIsReviewActive(true);
            setIsDescriptionActive(false);
        }
        if(target === 'description'){
            setIsReviewActive(false);
            setIsDescriptionActive(true);
        }
    }
    return(
       <>
        <section className={style[`product-desc`]}>
            <div className={style.heading}>
                <h4 onClick={showDescriptionHandler} style={isDescriptionActive ? {color: '#D23F57'}: {}}>description</h4>
                <h4 onClick={showDescriptionHandler} style={isReviewActive ? {color: '#D23F57'}: {}}>reviews</h4>
            </div>
            <aside className={style['aside-specification']}>
                {isDescriptionActive && <div>
                <h5>specification :</h5>
                <p>brand: beats</p>
                <p>model: s450</p>
                <p>wireless bluetooth headset</p>
                <p>fm frequency response: 87.5 - 108 mhz</p>
                <p>feature: fm radio, card supported (micro sd / tf)</p>
                <p>made in india</p>
            </div>}
            </aside>
            <aside className={style['aside-reviews']}>
                {isReviewActive &&   <div>
                {reviews.map((item, index) => (
                    <div key={index+9}>
                       <div className={style.review}>
                       <div>
                           <picture>
                            <img src={item.image} alt="testimonial_image"/>
                           </picture>
                        </div>
                        <div>
                        <h5>{item.name}</h5>
                        {Array(5).fill(0).map((star, index) => (
                            star <= item.star ? <AiFillStar style={{color: 'yellow'}} key={index+8}/> : <AiOutlineStar key={index+11}/>
                        ))}
                        <span className={style.rating}>4.7</span>
                        <span className={style.year}>{item.year} years ago</span>
                        </div>
                        </div>
                        <p className={style.comment}>{item.comment}</p>
                    </div>
                ))}
            </div>}
            </aside>
        </section>
       </>
    )
}

export default ProductDescription;