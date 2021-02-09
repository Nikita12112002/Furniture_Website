import React from "react";


function Sresults(props){

    const img= `https://source.unsplash.com/400x300/?${props.name}`;

    return(
        <>
      

      <div>
      <img src= {img} alt=" photo"/>
      </div>

       
        </>
    );
}

export default Sresults;