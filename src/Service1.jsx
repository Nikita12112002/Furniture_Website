import React from "react";
import { NavLink } from "react-router-dom";
import Wdata from "./Wdata";
import Card from "./WCard";
import {useStateValue} from "./StateProvider";
import Product from "./Product";



function Service()
{
  return(
    <>

    <div style={{display:"flex" , marginLeft:"5px" , marginRight:"5px" , zIndex:"1"}}>
      <Product
        
        id ="123456"
        title="WOODEN DINING TABLE"
        price={17059}
        rating={1}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEZ0VjjNnJN2vrb4_8Fna2r1Rf6du9o0gc9w&usqp=CAU"
      />


<Product

id ="123456"
title="THE BLUE CHAIR"
price={15000}
rating={1}
image="data:image/jpeg;base64,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"
/>


<Product

id ="123456"
title="KIDS BUNK BEDS"
price={19000}
rating={1}
image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGtbZPbIa2qDRNKsjdR_QwkWvWRBO8NpdSQQ&usqp=CAU"
/>
</div>


<br/>

<div style={{display:"flex" , marginLeft:"5px" , marginRight:"5px" , zIndex:"1"}}>
<Product

id ="123456"
title="KOREAN KIDS BED"
price={19459}
rating={1}
image="data:image/jpeg;base64,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"
/>

<Product

id ="123456"
title="3-SEATER SOFA"
price={23765}
rating={1}
image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYn9ajFGwSst0bW_6y-k8KMFT-xIltPq5vQ&usqp=CAU"
/>

<Product

id ="123456"
title="KIDS STUDY TABLE"
price={18000}
rating={1}
image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT39R93HtJ2cQGeLGQm94dcwPhsfcgk9X9cdg&usqp=CAU"
/>


</div>

<br/>

<div style={{display:"flex" , marginLeft:"5px" , marginRight:"5px" , zIndex:"1"}}>


<Product

id ="123456"
title="WALL SHELF"
price={15245}
rating={1}
image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KACBksvN-ouvngoyhXb86FSzv23lrwcX2A&usqp=CAU"
/>




<Product

id ="123456"
title=" FULL LIVING PACKAGE"
price={10409}
rating={1}
image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGdWXYNZEtIs55SDepGg005elKHakzvIfwnA&usqp=CAU"
/>



<Product

id ="123456"
title="BOOK SHELF"
price={15739}
rating={1}
image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL5oAlF-cgEgX1U8VJut42iyXNORFO9MVzYw&usqp=CAU"
/>

</div>

<br/>

<div style={{display:"flex" , marginLeft:"5px" , marginRight:"5px" , zIndex:"1"}}>

<Product

id ="123456"
title="WOODEN LEG CHAIR"
price={10499}
rating={1}
image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO5HCFJ-I4HssxiXCg3XkqQjlKOIBQ2F8eEA&usqp=CAU"
/>

<Product

id ="123456"
title="STUDY TABLE"
price={15735}
rating={1}
image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKZq6Rd17mqC5Z09HIEL-mb6Bza1-TqJtn0A&usqp=CAU"
/>


<Product

id ="123456"
title="WOODEN CUPBOARD"
price={12000}
rating={1}
image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrVgVvoAWVQ25pr_hljmwHRd0yhX9Oq8XREw&usqp=CAU"
/>
</div>

<br/>


    <div style={{display:"flex" , marginLeft:"5px" , marginRight:"5px" , zIndex:"1"}}>






<Product

id ="123456"
title="L-SHAPE SOFA"
price={9000}
rating={1}
image="https://www.pngitem.com/pimgs/m/4-40994_black-sofa-furniture-png-hd-transparent-background-furniture.png"
/>



<Product

id ="123456"
title="SUNMIKA STOOLS"
price={13800}
rating={1}
image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKb_dAoWayvwxuJL3lu6283bMKsjSv5HY2dg&usqp=CAU"
/>



<Product

id ="123456"
title="WALL DECORATOR"
price={14000}
rating={1}
image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUPYvIHeEDmWX-yto7CLqrIqrwlEB5k9aKWg&usqp=CAU"
/>
    </div>




    </>
  );
}




export default Service;









/*function Service(){

  const [state , dispatch]= useStateValue();

  const addToBasket =() => {

     dispatch(
       {

        type: "ADD TO BASKET",

        
       }
     );

  };
    return(
        <>
         

         <h2 style={{textAlign:"center" , marginTop:"30px",fontWeight:"bolder" , color:"green",fontFamily:"Arial, Helvetica, sans-serif" }}>
         </h2>
        
         <div class="card" style={{width: "18rem", marginTop:"50px", marginLeft:"40px" ,float:"left"}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTj09sK6zUg1F4UxX4cu0_t-KKxyQeSwJgQsA&usqp=CAU" class="card-img-top image-height" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Rs-17,059</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-success">ADD TO CART</a>
  </div>
</div>

     
 
<div class="card" style={{width: "18rem", marginTop:"50px", marginLeft:"40px" , float:"left"}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTp1G567rcreltd4m7Bn36Kd17AZEalz11Khw&usqp=CAU" class="card-img-top image-height" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Rs-15,000</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-success">ADD TO CART</a>
  </div>
</div>

<div class="card" style={{width: "18rem", marginTop:"50px", marginLeft:"40px" , float:"left"}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSi__sRgQsMiVaZzRl4WlrS7H-3R99rPpjj4Q&usqp=CAU" class="card-img-top image-height" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Rs-19,459</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-success"  onClick={addToBasket}>ADD TO CART</a>
  </div>
</div>


<div class="card" style={{width: "18rem", marginTop:"50px", marginLeft:"40px" , float:"left"}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShCJkEdjnclq7wjEZ1op1uVhuzDyPQvh5qbg&usqp=CAU" class="card-img-top image-height" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Rs-23,765</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-success">ADD TO CART</a>
  </div>
</div>

<div class="card" style={{width: "18rem", marginTop:"50px", marginLeft:"40px" , float:"left"}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLOxGi3gkCl4HEW5O-WVUrGcx_lS_nFrsXLw&usqp=CAU" class="card-img-top image-height" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Rs-18,000</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-success">ADD TO CART</a>
  </div>
</div>


<div class="card" style={{width: "18rem", marginTop:"50px", marginLeft:"40px" , float:"left"}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTOI1jzuN8Uv_RkCRZHTxjNl-Vnb3kn9ueyA&usqp=CAU" class="card-img-top  image-height" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Rs-15,254</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-success">ADD TO CART</a>
  </div>
</div>


<div class="card" style={{width: "18rem", marginTop:"50px", marginLeft:"40px" , float:"left"}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7OeILPu-hgQCM3lsa-0p31d1LI47f5D4gwg&usqp=CAU" class="card-img-top image-height" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Rs-10,499</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-success">ADD TO CART</a>
  </div>
</div>


<div class="card" style={{width: "18rem", marginTop:"50px", marginLeft:"40px" , float:"left"}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRqXjrRWRk5kHj8o91xGfrAzD5doH1dbq1bg&usqp=CAU" class="card-img-top image-height" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"> Rs-15,739</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-success">ADD TO CART</a>
  </div>
</div>
 
 <div class="card" style={{width: "18rem", marginTop:"50px", marginLeft:"40px" , float:"left"}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2Ak9ek6Ov3c4Z8Ld0BRPicPgvf5yuWQvASA&usqp=CAU" class="card-img-top image-height" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"> Rs-9,000</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-success">ADD TO CART</a>
  </div>
</div>

<div class="card" style={{width: "18rem", marginTop:"50px", marginLeft:"40px" , float:"left"}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcLha_IdGQGvFcODnx6B-wqVEDMC3eDrpasg&usqp=CAU" class="card-img-top image-height" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"> Rs-12000</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-success">ADD TO CART</a>
  </div>
</div>



<div class="card" style={{width: "18rem", marginTop:"50px", marginLeft:"40px" , float:"left"}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvdQPlVcLdbdydfbAo0_dzbfRPRF5VOJR0cg&usqp=CAU" class="card-img-top image-height" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Rs-14,200</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-success">ADD TO CART</a>
  </div>
</div>

<div class="card" style={{width: "18rem", marginTop:"50px", marginLeft:"30px" , float:"left"}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVUcmxzp473Ha-l6a1ZaJA61cFVid9ca4CHQ&usqp=CAU" class="card-img-top image-height" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Rs- 12,999</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-success">ADD TO CART</a>
  </div>
</div>

  


<br/><br/>
<br/>
<br/>


</>

    );
}

export default Service;*/
