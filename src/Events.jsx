import React, { useState } from 'react';

const Heading ={
    color: "white",
    backgroundColor : "purple" ,
    marginLeft: "600px",
    marginTop :"100px" ,
    fontSize:"50px"
}
    

function App(){


    let color="#8e44ad";
    const[ bg, setbg]= useState(color);
    const [name , setname]= useState("click me");

    function bgcolor(){

        let newcolor="#34495e";
        

        setbg(newcolor);
        setname("use me");
    }
    
    function bgback(){

        
        setbg(color);
        setname("click me");
    }
    
    return(
        <>

        <div style={{ backgroundColor : bg}} >

        <button style={Heading} onMouseOver={bgcolor} onMouseLeave={bgback}>{name}</button>

        

        </div>
    


        </>
    );
}
export default App;