import React, { useState } from 'react';




function App(){

    let time = new Date().toLocaleTimeString();


    const[ count, setcount]=useState(time);

    function Inc(){
     
        time= new Date().toLocaleTimeString();

         setcount(time);
     
    }
    setInterval(Inc,1000);

    return(
        <>

        <h1>{count}</h1>


        </>
    );
}

export default App;