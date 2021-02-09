import React, { useState } from "react";
import Sresults from "./Sresults";

function Search(){

    const[img ,setimg] =useState("");

    function Inputevent(event){
        setimg(event.target.value)
    }
        return(
        <>
       <div className="searchbar">

       <input type="text" placeholder="Search Anything" value={img} onChange={Inputevent}/>

      

       {img ===""? null:<Sresults name={img}/> }
       </div>
        </>
    );
}

export default Search;