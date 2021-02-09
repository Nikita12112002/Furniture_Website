import React, { useState, useEffect } from "react";

function App(){

    const[num, setnum]=useState(0);

    function submit(){
        setnum(num+1);
    }

    useEffect(function(){
        document.title= ` You clicked ${num} times`
        
    })
    return(
        <>

        <button onClick={submit}>Click me{num}</button>
        </>
    );
}

export default App;