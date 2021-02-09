import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props)=>{

    return(
        
        <>

            <section id="header" className=" header d-flex align-items-center">

             
              
              <div className="row">
  
              <div className="col-10 mx-auto">
  
                 <div className="row">
              
                     <div className="col-md-6 pt-5 pt-lg-0  order-2 order-lg-1 d-flex justify-content-center flex-column ">
                 
  
                                   
               <h1 className="h1">     {props.name}  </h1>
  
             <span className="h2 ">
            <strong >{props.heading}</strong> 
            </span>
           
          
            </div>
            </div>
            </div>
            </div>
  
              <div className="col-lg-6 order-1 order-lg-2 header-image img ">
             
                <img src={props.imgsrc} 
                 
                
                className="progress-bar-animated"/>
  
             
             
             </div>
            
            
             </section>

             </>
    
    );

};

export default Common;


/*<NavLink to={props.visit} className="btn btn-outline-danger ml-5 rounded-pill" >{props.btn}</NavLink>*/