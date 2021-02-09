import React  from 'react';
import ReactDOM from 'react-dom';

import App from "./Website";

import "./index.css";
import {BrowserRouter} from "react-router-dom";
import { useEffect } from 'react';
import {StateProvider} from "./StateProvider";
import reducer,{initialState} from "./Reducer";







ReactDOM.render(

  <>
  <BrowserRouter>
  
      <StateProvider initialState={initialState} reducer={reducer}>
      <App/>
    </StateProvider>
</BrowserRouter>
  

  </>,document.getElementById("root")
);





    

