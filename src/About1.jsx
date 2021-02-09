
import React from "react";
import Common from "./Common";


function About(){
    return(
        <>
             
            

        

              <h1 style={{color:"black" ,marginLeft:"250px" , fontWeight:"bold" , fontFamily:"Arial, Helvetica, sans-serif"}}>SELL YOUR VALUABLE PRODUCTS HERE</h1>
          
<form action="/action_page.php">

     <img src="https://qph.fs.quoracdn.net/main-qimg-3e1fd03a9c3743529e353fa02d72068b.webp" style={{height:"460px", width:"600px" , marginTop:"70px",marginLeft:"30px"}}></img>
  

   <div className="wrapper" style={{marginLeft:"400px" ,marginTop:"-600px" }} >
   <div className="form-wrapper" style={{ height:"200px" ,marginLeft:"-90px" }}>
   
  
  
  <input type="file" id="myfile" name="myfile" multiple className="btn-btn-success"/><br></br>
  
  <button type="submit" class="btn btn-success" >UPLOAD</button>
  </div>
  </div>



      
  
</form>
        
        </>
    );
}
export default About;



//https://qph.fs.quoracdn.net/main-qimg-3e1fd03a9c3743529e353fa02d72068b.webp