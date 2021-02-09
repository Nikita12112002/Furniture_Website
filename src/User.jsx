import React from "react";
import { useParams ,  useLocation , useHistory } from "react-router-dom";




function User(){

    const {fname , lname} =useParams();
    const location =useLocation();
    const history = useHistory();

    console.log(history);
  
    function submit(){
        history.goBack();
    
    }

    function submits(){
        history.push("/contact");
    
    }
    
    return(

        <>
         <h1>Hello!! {fname} {lname} </h1>
         <h1> My current location is {location.pathname}</h1>

         {location.pathname=== "/user/nikita/gupta" ? <button onClick={submit}> go back me</button> : null}

         {location.pathname=== "/user/nikita/kiet" ? <button onClick={submits}> Click me</button> : null}
        
        </>
    );

}

export default User;