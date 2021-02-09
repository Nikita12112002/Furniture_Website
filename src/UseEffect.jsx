import React, { useState, useEffect }  from "react";

function App(){
    const[num , setnum]=useState(0);

    const[ nums , setnums]=useState(0);

    useEffect(function(){
        alert("you have clicked")
    },[num])
    function submit(){
        setnum(num+1);
    }

    

    

    function submits(){
        setnums(nums+1);
    }
    return(
        <>

        <button onClick={submit}>Click me{num}</button>

        <br></br>

        <br></br>

        <button onClick={submits}>Click me{nums}</button>
        </>
    );
}

export default App;