import React from "react";
import "./Cart.css";
import { useStateValue } from "./StateProvider";
import CartProduct from "./CartProduct";
import { NavLink } from "react-router-dom";
import Subtotal from "./Subtotal";
import {actionTypes} from "./Reducer";
import DeleteIcon from '@material-ui/icons/Delete';

import "./Cart.css";
import CheckoutProduct from "./CheckoutProduct";


function Cart()
{

  const[{basket}] = useStateValue();
  return(
    <>

       <div className="checkout">

         <img
          
          className="checkout__ad"
           src=""
           alt=""
         />

         {basket?.length ===0 ?(

           <div>
           <h2 style={{fontFamily: "Langar , cursive" , textAlign:"center" }}>YOUR SHOPPING CART IS EMPTY</h2>
           </div>

         ):(

           <div>
           <h2 className="checkout_title" style={{fontFamily: "Langar , cursive" , textAlign:"center" }}>YOUR SHOPPING BASKET</h2>

           {basket?.map((item) => (

            

            

            <CheckoutProduct
             
             id={item.id}
             title={item.title}
             image ={item.image}
             price={item.price}
             rating={item.rating}

            />
             
           ))}
           
           </div>
         )}

        
       </div>
       {basket.length >0 && (
         <div className="checkout_right">
           <Subtotal/> 
         </div>
       )}
       
 
    </>
  );
}

export default Cart;
/*function Cart()
{
  return(
    <>

<div style={{float:"right", width:"300px" , height:"800px" , backgroundColor:"blue" , marginRight:"30px" , backgroundImage:" linear-gradient(#7c9da3, #9be5f2)"}}>

 
  <img src="https://av.sc.com/in/content/images/in-credit-card-cashback-masthead-banner-new.jpg" style={{ width:"300px" , height:"250px" }}/>

<br/><br/><br/>

  <h2 style={{fontFamily: "Lobster" ,color:"#de1627" , textAlign:"center"}}>GET UPTO 25% OFF </h2>
  <h2  style={{fontFamily: "Lobster" ,color:"black" , textAlign:"center"}}> on Credit card </h2>
  <h2 style={{fontFamily: "Lobster" ,color:"black" , textAlign:"center"}}>payment</h2>
  <h1 style={{textAlign:"center"}}>at </h1>
  <h1 style={{textAlign:"center"}}> 2N LADDER</h1>

  </div>



    <h1 style={{fontFamily: "Langar , cursive" , textAlign:"center" }}>YOUR BASKET</h1>

    

<div class="card" style={{width: "27rem"  , marginLeft:"50px" , float:"left" , height:"350px"}}>
  <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTj09sK6zUg1F4UxX4cu0_t-KKxyQeSwJgQsA&usqp=CAU" class="card-img-top"  alt="..."/>
  <div class="card-body" >
    <p class="card-text">
         
        <b> Quantity</b>
         <select>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="2">3</option>
           <option value="2">4</option>
           <option value="2">5</option>
         </select>
       
     <span className="deleteIcon">  <DeleteIcon/> </span>
    </p>
  </div>
</div>


<div class="card" style={{width: "27rem"  , height:"350px"  }}>
  <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShCJkEdjnclq7wjEZ1op1uVhuzDyPQvh5qbg&usqp=CAU" class="card-img-top"  alt="..."/>
  <div class="card-body" style={{height:"57px"}} >
    <p class="card-text">
     
    <b> Quantity</b>
    <select>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="2">3</option>
           <option value="2">4</option>
           <option value="2">5</option>
         </select>
         <span className="deleteIcon">  <DeleteIcon/> </span>
    .</p>
  </div>
</div>



    </>
  );
}


export default Cart;

/*function Cart() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className='cart'>
      <div className='cart__left'>
        {basket?.length === 0 ? (
          <div>
            <h2>Your cart is empty</h2>
            <p>
              You have no items in your cart head over to our products and
              choose from the latest collections out there.Be trendy{" "}
            </p>
          </div>
        ) : (
          <div>
            <NavLink to='/'>Procced to buy</NavLink>
            {basket.map((item, ind) => (
              <CartProduct
                key={ind}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                subtitle={item.subtitle}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className='checkout__right'>
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Cart;*/