import React from "react";
import VisibilityIcon from '@material-ui/icons/Visibility';
import {useState} from "react";




 

function Password()
{
  const[data , setdata] =useState({
  
    confirmpassword :"",
    password :"",
   
    
 
  });
  
  function formSubmit(e){
  
      e.preventDefault();
      alert(` Your password have been successfully change `);
          
      
  };
 function InputEvent(event){
 const name=event.target.name;
 const value =event.target.value;
 
 setdata((preVal) =>{
    return{
        ...preVal,
        [name]:value,
    };
 }
 );
 
 };
  
  return(
    <>

   <form onSubmit={formSubmit}>  
    
    <h1 style={{marginTop:"20px"   ,marginLeft:'550px', height:"250px"}}>Forgot Password ?</h1>

  <div style={{ marginTop:"-120px"   ,  width:'600px' ,marginLeft:'400px', height:"250px"}} >

  

  

      <div className="container">
                 
                 <div className="row">
                     
                     <div className="col-md-6 col-10 mx-auto">

<div class="input-group flex-nowrap">
  
  
  
  <input type="password" className="form-control"
    placeholder="Password" aria-label="Password" 
  aria-describedby="addon-wrapping"
  onChange={InputEvent}
  name="password"
  value={data.password}
   required/>
  
  <span class="input-group-text" id="basic-addon1"><VisibilityIcon/></span>
  </div>

  <br></br>

  <div class="input-group flex-nowrap">
  
  
  
  <input type="password" className="form-control" placeholder="Confirm Password" 
  aria-label="Password" aria-describedby="addon-wrapping"
  onChange={InputEvent}
  name= "confirmpassword"
  value={data.confirmpassword}
  required/>
  <span class="input-group-text" id="basic-addon1"><VisibilityIcon/></span>
  </div>

  <br></br>

  <button type="submit" class="btn btn-outline-success">Confirm</button> 

</div>
</div>
</div>
</div>

</form>
    </>
);
}

export default Password;
