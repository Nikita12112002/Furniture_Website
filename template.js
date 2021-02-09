import React from "react";
import ReactDOM from "react-dom";

const fname="nikita";
const lname="gupta";

ReactDOM.render(
<>

<h1> MY NAME IS {fname}</h1>

  <p>hello {fname + " " + lname}</p>

  <p> hello {`${fname} ${lname}`}</p>
  <h1>{`my first name is ${fname} and my last name is ${lname}`} </h1>

  <p>my lucky number is {5+5}</p>

  </>,
    document.getElementById("root"));