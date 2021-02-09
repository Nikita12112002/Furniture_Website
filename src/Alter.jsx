import React, { useState } from 'react';

function App(){

    const[ fullname , setfullname ] =  useState(
        {
             fname :"",
            lname:" ",
            email:" ",
            phone:" ",
        }
    );

    

    function Inputevent(event){

        const value= event.target.value;

        const name= event.target.name;

        setfullname( name = value);

            
    }
    

        function Submit(event){

            event.preventDefault();

            alert("form submitted");


        };
        
        
    return(

        <>

        <form onSubmit={Submit}>

        <div style= {{ marginLeft:"550px", marginTop:"110px" }}>

        
        <h1>HELLO {fullname.fname}  {fullname.lname} </h1>

        <p> {fullname.email} </p> 

        <p> {fullname.phone} </p> 

        
        <input type="text" placeholder="Enter your name" onChange={Inputevent} name="fname" value={fullname.fname} /> <br/>

        <br/>

        <input type="text" placeholder="Enter your last name" onChange={Inputevent} name="lname" value={fullname.lname}  /> <br/>

        <br/>

        <input type="email" placeholder="Enter your email" onChange={Inputevent} name="email"  value={fullname.email} /> <br/>

        <br/>

        <input type="phone" placeholder="Enter your phone no" onChange={Inputevent} name="phone" value={fullname.phone}  /> <br/>

        <br/>

        <button type="submit">Submit ME</button>

        </div>

        </form>


        </>

       



    );
}

export default App;