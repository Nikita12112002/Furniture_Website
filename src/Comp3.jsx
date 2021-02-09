import React from "react";
import {FirstName ,LastName} from "./Context";



function Comp3(){
    return(
        <>
        <FirstName.Consumer>
        {
         
         
        function(fname){
            return(

            <LastName.Consumer>
               {

               function(lname){
        return ( <h1>my name is { fname} {lname}</h1>
        );
               



        
        }}
                  </LastName.Consumer>
        );
        }}
        </FirstName.Consumer>

        

        

       
        </>
    );
}

export default Comp3;