
import React from 'react';
import ReactDOM from 'react-dom';
import Sdata from "./Sdata";
import Card from "./Cards";
import "./index.css";

const favseries= "amazon";


function Favseries(){

  if(favseries === "netflix"){
   
  return(

    <Card
    
    imgsrc={Sdata[0].imgsrc}
    title={Sdata[0].title}
    sname= {Sdata[0].sname}
    link={Sdata[0].link}



/>
  );
  }

else{
  return(
    <Card
    
    imgsrc={Sdata[3].imgsrc}
    title={Sdata[3].title}
    sname= {Sdata[3].sname}
    link={Sdata[3].link}



/>
  );
}

};

ReactDOM.render(
  <>

  <h1>hello</h1>

  <Favseries/>

  </>,document.getElementById("root")

);



    

