import React, { useState } from 'react';

 
const H1={
     
    marginLeft: "600px",
    marginTop :"150px"

}



const Heading ={
    color: "white",
    backgroundColor : "purple" ,
    marginLeft: "600px",
    marginTop :"100px"
    
    }

function App(){
    
    let time= new Date().toLocaleTimeString();

    const [count,setcount]= useState(time);

    function Inc(){

        time= new Date().toLocaleTimeString();

        setcount(time);



    }

    return(

        <>

        <h1 style={H1}>{count}</h1>
        <button onClick={Inc} style={Heading}><h1 >GET TIME</h1></button>

        </>
    );
}

export default App;