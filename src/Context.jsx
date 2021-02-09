import React, { createContext } from "react";
import Comp1 from "./Comp1";

const FirstName=createContext();
const LastName=createContext();
function App(){

    return(
        <>
      <FirstName.Provider value={"Nikita"}>
        <LastName.Provider value={"Gupta"}>
       <Comp1/>
       </LastName.Provider>

      </FirstName.Provider>
       
        </>
    );

}
export  default App;

export {FirstName , LastName};