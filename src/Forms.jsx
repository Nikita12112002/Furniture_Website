import React, { useState } from 'react';

function App(){


    const[name,setname]=   useState("");
    const[fullname,setfull] =  useState( " " );

    const[ lname, setlname]= useState("");
    const[ last, setlast]=  useState("");
    
    
    

    function Inputevent (event){

        setname(event.target.value);
    }

    function Inputevent2 (event){

      setlname(event.target.value);
  }

  
 
    
    

     
    function again(event) {

      event.preventDefault();

        setfull(name);
        setlast(lname);
    }
    
    return(
        <>

        <form onSubmit={again}>
       
        
      <div style= {{ marginLeft:"550px", marginTop:"110px" }}>

      

        <h1>HELLO {fullname} {last}</h1>

        



        <input type="text"
        
         placeholder="Enter Your Name" 

         onChange={Inputevent}
         
         value={name}

        />
        <br></br>
        <br></br>
             
        
             <input type="text"
        
        placeholder="Enter Your Last Name" 

        onChange={Inputevent2}
        
        value={lname}

       />
        

        <br></br>
        <br></br>
             

        <button type="submit" >SUBMIT</button>

      </div>

      </form> 
       
      
       
        </>
    );
}
export default App;