import React from "react";
import "./Product.css";
import {useStateValue} from "./StateProvider";


function Product({id ,title ,image, price , rating})

{

  const[{basket} , dispatch] = useStateValue();

  

  const addToBasket = ()=>
  {
        dispatch({

          type : 'ADD_TO_BASKET',
          item :{
             id: id,
             title: title,
             image : image,
             price : price,
             rating :rating,
          },
        });
  };
  
  
  return(
    <>
       <div className="product">

       <div className="product_info">
         <p style={{fontFamily: "Langar cursive" , fontSize:"25px" , marginLeft:"150px" }}>{title}</p>

         <p className="product_price"style={{fontFamily: "Langar cursive" , fontSize:"25px" , marginLeft:"190px", marginTop:"-20px"}}>
           <small >RS</small>
           <strong style={{fontFamily: "Langar cursive"}}>{price}</strong>
         </p>

         <div className="product_rating">
           {Array(rating)

           .fill()
           .map((_) =>(
             <p>
                <img 
                src="https://i.pinimg.com/736x/a6/d0/57/a6d05721c9eb6cf87ac890b6c1f0c412.jpg"
                 style={{width:"120px" , height:"40px" , marginLeft:"170px" , marginTop:"-30px"}} />
                 </p>
           ))
           
           }
         </div>
       </div>

       <img src={image} style={{width:"350px" , height:"300px", marginLeft:"75px"}} alt="" />
       <br/>

       <button onClick={addToBasket} style={{marginLeft:"75px" , width:"350px"}}>Add to basket</button>
       </div>
    </>
  );
}

export default Product; 
/*import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import "./Product.css";

function Product({ image, price, desc, name, id, subtitle }) {
  return (
    <div className='product'>
      <Link
        to={"/product/" + id}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Card
          className='m-2 card'
          style={{ borderRadius: "10px", background: "#13181f", color: "#fff" }}
        >
          <CardImg
            top
            width='100%'
            height='250px'
            src={image}
            alt='Card image cap'
            style={{ padding: "20px" }}
          />
          <CardBody>
            <CardText style={{ fontWeight: "700", fontSize: "25px" }}>
              $ {price}
            </CardText>
            <CardTitle>{name}</CardTitle>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
}

export default Product;*/