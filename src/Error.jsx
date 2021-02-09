import React from "react";
import { NavLink} from "react-router-dom";

function Error(){
    return(
        <>
        <h1>Sorry !! This page didnot exist</h1>

        <h1>ERROR 404 PAGE</h1>

        <NavLink to="/">Go Back</NavLink>
        </>
    );

}

export default Error;