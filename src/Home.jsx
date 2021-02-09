import React from "react";
import {NavLink} from "react-router-dom";
import Common from "./Common";
import Wdata from "./Wdata";
import Card from "./WCard";


function Home(){
  return(
  <>

<h3 style={{textAlign:"center"}}>Buy Furniture Online At <span style={{fontWeight:"bold"}}> 2N Ladder</span> - India's Favourite Destination For All Things Home!</h3>


<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" style={{height:"450px"}} src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/oliver-bonas-alice-dressing-table-mirror-rattan-kinship-dressing-table-1583946732.jpg?crop=1.00xw:0.376xh;0,0.142xh&resize=640:*" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" style={{height:"450px"}} src=" https://www.bassettfurniture.com/_images/infocontent/2454-K143A-FA13.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" style={{height:"450px"}} src="https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2020/08/13010926/Cover-19.png" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


      
      <h2 style={{backgroundColor:"black" , color:"white" ,fontWeight:"inherit" , width:"30%" ,
       transform:"rotate(270deg)",marginLeft:"1130px" , marginTop:"-50px",textAlign:"center"
       }}>FLAT 30% OFF</h2>
   

     
     <br></br>
     

    <h2 style={{textAlign:"center" , backgroundColor:"#fc5b67" }}>POPULAR ACROSS SITES</h2>




     

    <div class="card" style={{width: "18rem" , marginLeft:"250px",marginTop:"10px",float:"left"}}>
  <img src="https://www.ulcdn.net/images/products/233141/product/Duetto_Platform_Bed_LP.jpg?1546585898" style={{borderRadius:"100px"}}
   class="card-img-top " alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Duetto Platform Bed</h5>
    <p class="card-text">Two-tone Finish,King Bed size.</p>
    
  </div>
</div>


<div class="card" style={{width: "18rem",marginTop:"10px",float:"left" }}>
  <img src="https://www.ulcdn.net/images/products/297373/product/Graham_Study_Table_LP.jpg?1595911683" style={{borderRadius:"100px"}} 
  class="card-img-top " alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Graham_Study_Table_LP</h5>
    <p class="card-text">Smoke-Walnut Finish.</p>
   
  </div>
</div>





<div class="card" style={{width: "18rem",marginTop:"10px" }}>
  <img src="https://www.ulcdn.net/images/products/162457/product/Fujiwara_Display_Cabinet_replace_LP.jpg?1571032920" style={{borderRadius:"100px"}}
  class="card-img-top " alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Bookshelf /Display cabinet</h5>
    <p class="card-text">75 book capacity.</p>
   
  </div>
</div>

<br></br>
<br/><br/><br/>
<div style={{backgroundColor:"#f0f0f0" , width:"1350px" , height:"140px" , marginTop:"-80px"}}>

     
   <span style={{fontSize:"30px" , margin:"30px", fontFamily: "Do Hyeon"}}>  Register & </span> <br/>
    <span style={{ margin:"30px"}}> GET <b> SPECIAL </b> Offers</span>       

          

        <span style={{color:"#f54040" , marginLeft:"90px"}}>
        <span style={{fontSize:"30px" }}>EXTRA 5% OFF  + <span style={{color:"black"}}>30% CashBack</span></span></span>


<img style={{width:"600px" , height:"140px" , marginTop:"-45px" , float:"right" }} 
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSip0LEj6JYrrokwjmuyQXYCH1wVGaftaILAw&usqp=CAU"></img>

</div>

<NavLink  exact to="/Login">
<span style={{float:"right" , color:"#f54040", fontFamily:"Do Hyeon" , fontWeight:"bold" , fontSize:"20px" , marginRight:"30px"}}>
Login/Register</span>

</NavLink>

<h2 style={{  marginTop:"30px", marginLeft:"20px" , fontWeight:"bolder"}}>POPULAR BRANDS</h2>





<div>

<div class="card" style={{width: "18rem" , float:"left" , marginLeft:"30px" , marginTop:"10px"}}>
  <img src="https://www.godrejinterio.com/imagestore/B2C/56101502SD00944/56101502SD00944_A1_803x602.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text"> 
    <span style={{fontWeight:"bold",fontSize:"20px"}}>NILKAMAL.</span><br ></br>

    <span style={{fontSize:"35px" ,color:"grey",height:" 50px"}}><b>FLAT</b>70% OFF </span>
    
  
   
    </p>

    </div>
  
</div>

<div class="card" style={{width: "18rem ", float:"left" , marginLeft:"30px" , marginTop:"10px"}}>
  <img src="https://content3.jdmagicbox.com/def_content/furniture_dealers/default-furniture-dealers-7.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text"> <span style={{fontWeight:"bold",fontSize:"20px"}}>USHA LEKUS</span>
    
    <br></br>
    <span style={{fontSize:"35px" ,color:"grey",height:" 50px"}}><b>FLAT</b>70% OFF </span>
        
    .</p>

  </div>
</div>

<div class="card" style={{width: "18rem" , float:"left" , marginLeft:"30px" , marginTop:"10px"}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREO1Bkt0PTM8iMgHLHVK3Ct8LTga86MDF9ww&usqp=CAU" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text"> <span style={{fontWeight:"bold",fontSize:"20px"}}> DURAI</span>.
    <br></br>
    <span style={{fontSize:"35px" ,color:"grey",height:" 50px"}}><b>FLAT</b>70% OFF </span>
        </p>
  </div>
</div>

<div class="card" style={{width: "18rem" , float:"left" , marginLeft:"30px" , marginTop:"10px"}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEvWQvO96iCHMDvPu4DkDK0o27wSqXA5I8zg&usqp=CAU" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text"> <span style={{fontWeight:"bold",fontSize:"20px"}}>GODREJ.</span>
    <br></br>
    <span style={{fontSize:"35px" ,color:"grey",height:" 50px"}}><b>FLAT</b>70% OFF </span>
        </p>
  </div>
</div>

<br></br>
  

   <span  style={{color:"orange " , fontWeight:"bold"  , marginLeft:"70px" , marginRight:"-30px"}}>BROWSE ALL BRANDS</span>



  
   <div>
      <h2 style={{  marginTop:"30px", marginLeft:"20px" , fontWeight:"bolder" , textAlign:"center"}}>
      FEATURED COLLECTIONS</h2>

      <img style={{ width:"500px" , height:"350px " , marginLeft:"110px" }} 
 src="https://ii2.pepperfry.com/media/wysiwyg/banners/03_fc_web_2810201.jpg"
 />
  
  <img style={{ width:"500px" , height:"350px " , marginLeft:"140px" }} 
 src="https://ii1.pepperfry.com/media/wysiwyg/banners/02_fc_web_2810201.jpg"
 />

</div>


  <NavLink exact to="/"><span style={{marginLeft:"300px" , fontWeight:"bold"  , color:"black" , width:"40px" , fontSize:"20px" }} >
  LIMA </span> </NavLink>
  <NavLink exact to="/"><span  style={{marginLeft:"600px" , fontWeight:"bold"  , color:"black" , width:"40px"  , fontSize:"20px" }}>
  SURAIN </span> </NavLink>
  

    



<h2 style={{  marginTop:"20px", marginLeft:"20px" , fontWeight:"bolder"}}>NEW TRENDS</h2>


 
<img style={{ width:"300px" , height:"350px " , marginLeft:"30px" }} 
 src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/marie-flannigan-designtrends-2020-1574270824.jpg?crop=0.752xw:1.00xh;0.0527xw,0&resize=980:*"
 />
 
 





 
 <img style={{ width:"300px" , height:"350px " , marginLeft:"30px"}} 
 src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/traditional-details-liz-foster-1574801325.jpg?crop=1xw:1xh;center,top&resize=980:*"
 />

<img style={{ width:"300px" , height:"350px " , marginLeft:"30px" }} 
 src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/decorist-dinning-4730-1574801853.jpg?crop=1xw:0.9982253771073647xh;center,top&resize=980:*"
 />


<img style={{ width:"300px" , height:"350px " , marginLeft:"30px" }} 
 src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/art-deco-1574700274.jpeg?crop=1xw:1xh;center,top&resize=980:*"
 />


 <div style={{ marginTop:"-20px" }}>
  <NavLink exact to="/"><span style={{marginLeft:"70px" , fontWeight:"bold" , backgroundColor:"#94eaf7" , color:"black" , width:"40px" , fontSize:"20px" }} >
  EUROPIAN-INSPIRED </span> </NavLink>
  <NavLink exact to="/"><span  style={{marginLeft:"120px" , fontWeight:"bold" , backgroundColor:"#94eaf7" , color:"black" , width:"40px"  , fontSize:"20px" }}>
  TRADITIONAL DETAILS </span> </NavLink>
  <NavLink exact to="/"><span style={{marginLeft:"140px" , fontWeight:"bold" , backgroundColor:"#94eaf7" , color:"black" , width:"40px" , fontSize:"20px" }}>
   ECO-FRIENDLY </span>  </NavLink>
   <NavLink exact to="/"><span  style={{marginLeft:"240px" , fontWeight:"bold" , backgroundColor:"#94eaf7" , color:"black", width:"40px" , fontSize:"20px"  }}>
   ART-DECO </span>  </NavLink>

      </div>

    
    
<br></br>
<br/>
<br/><br/><br/>
<br/>






<div style={{backgroundColor:"#0c072e"}}>
                     <div style={{backgroundColor:"#0c072e", marginTop:"30px"}}>


                      
                      
                      <div style={{float:"left" , marginLeft:"200px"  , color:"white"  }}>
                      <h5>GET TO KNOW US</h5>
                      <br/>
                      
                      About Us<br/>
                      Careers <br/>
                   Press Releases <br/>
                   2N Cares<br/>
                   Gift a Smile<br/>
                     
                     </div>

                     
                          
                     <div style={{float:"left" , marginLeft:"220px" , color:"white"}}>

                     <h5>Connect with Us</h5><br/>
                        Facebook<br/>
                       Twitter<br/>
                        Instagram <br/>

                     </div>

                     <div style ={{float:"left" , marginLeft:"220px" , color:"white" }}>
                       <h5>Make Money with Us</h5>
                       <br/>
                       Sell on 2N <br/>
Sell under 2N Accelerator <br/>
Become an Affiliate <br/>
Fulfilment by 2N <br/>
Advertise Your Products <br/>
2N Pay on Merchants <br/>
                     </div>
                     </div>

                    

                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <br/>

                      <hr></hr>

                     <span style={{fontWeight:"bolder" ,textAlign:"center" ,marginLeft:"700px" , color:"white"}}>2N  </span>

                     <br/>

                     <div style={{marginLeft:"200px" , color:"white"}} >

                     Australia Brazil Canada China France Germany Italy Japan Mexico Netherlands
                     Singapore Spain United Arab Emirates United Kingdom United States
                     </div>
                   
                     </div>
                 </div>

  </>
  );
}

export default Home;

//https://clipartstation.com/wp-content/uploads/2018/09/group-of-business-people-clipart-5.jpg

//https://img.freepik.com/free-vector/living-room-interior_1284-12836.jpg?size=626&ext=jpg&ga=GA1.2.862957847.1600956206

/*style={{width :"1500px" , marginTop:"10px", height:"350px", marginLeft:"90px",float:"left"}}

<span style={{fontWeight:"bold" ,marginLeft:"550px"}}>© 2020 www.myntra.com. All rights reserved</span>
<br></br>
<span style={{ marginLeft:"570px" ,color:"grey"}}>TERMS AND CONDITIONS APPLIED.</span>*/








/*<div id="outerbox" style={{width:"1000px"}}>
 
 <div id="sliderbox">
        <img 

         
       style={{height:"400px" }}
        
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/oliver-bonas-alice-dressing-table-mirror-rattan-kinship-dressing-table-1583946732.jpg?crop=1.00xw:0.376xh;0,0.142xh&resize=640:*"/>

<img 

style={{height:"400px" }}
        



<img src="  https://www.bassettfurniture.com/_images/infocontent/2454-K143A-FA13.jpg"/>

style={{height:"400px" }}
        
src="https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2020/08/13010926/Cover-19.png"/>


<img 

style={{height:"400px" }}   
        

src="https://d2kz53n3bzvihv.cloudfront.net/resized/790_395_0_255_255_255/media/gbu0/categoryxxl/image/round-dining-tables-and-chairs-header-desktop-1000px-500px.jpg.jpeg"/>
    </div>
    </div>
  
      
      <div style={{float:"right" , backgroundColor:"lightblue"}}>

       
      </div>*/



      //<Slider slides={Images} />, document.querySelector('.main');




      /*<img 

style={{width :"1000px" , marginTop:"10px", height:"350px", marginLeft:"180px"}}

src="https://www.bassettfurniture.com/_images/infocontent/2454-K143A-FA13.jpg"/>*/