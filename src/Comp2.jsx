import React, { useContext } from "react";

import Comp3 from "./Comp3";

import {FirstName ,LastName} from "./Context";

function Comp2(){

    const fname= useContext(FirstName);
    const lname= useContext(LastName);

    return(

        <>
        <h1>My name is {fname} {lname}</h1>
        
        </>
    );
}

export default Comp2;