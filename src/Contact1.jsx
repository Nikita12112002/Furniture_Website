import React, { useState } from "react";

function Contact(){

    
        const[data , setdata] =useState({
            fullname :"",
            phonenumber:"",
            email :"",
            message :"",
            

        });

        function formSubmit(e){

            e.preventDefault();
            alert(`My name is ${data.fullname}. My phone number is ${data.phonenumber}. email is ${data.email},here is whta i want to say${data.message}`);
                
            
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
        <div className="my-3">
            <h1 className="text-center">
                CONTACT US
            
            </h1>
            </div>

            <div className="container">
                 
                 <div className="row">
                     
                     <div className="col-md-6 col-10 mx-auto">


                     <form onSubmit={formSubmit}>
  <div className="form-group">
    <label for="exampleFormControlInput1">FullName</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Your Name"/>
  </div>
  
  <br></br>
  <div className="form-group">
    <label for="exampleFormControlInput1">Phone Number</label>
    <input type="number" className="form-control" id="exampleFormControlInput1" name="phonenumber" value={data.phonenumber} onChange={InputEvent}  placeholder="Enter your Mobile number"/>
  </div>
  <br></br>
  <div className="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent}  placeholder="name@example.com"/>
  </div>
  
  <br></br>
  
  
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message} onChange={InputEvent} ></textarea>
  </div>
  <br></br>

 <div className="col-12">
  <button className="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
</form>

                     </div>
                     </div>
                     </div>

                          <div style={{backgroundColor:"#0c072e"}}>
                     <div style={{backgroundColor:"#0c072e", marginTop:"30px"}}>


                      
                      
                      <div style={{float:"left" , marginLeft:"220px"  , color:"white" }}>
                      <h5>GET TO KNOW US</h5>
                      <br/>
                      
                      About Us<br/>
                      Careers <br/>
                   Press Releases <br/>
                   Amazon Cares<br/>
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
                       Sell on Amazon <br/>
Sell under Amazon Accelerator <br/>
Become an Affiliate <br/>
Fulfilment by Amazon <br/>
Advertise Your Products <br/>
Amazon Pay on Merchants <br/>
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
        </>
    );
}
export default Contact;