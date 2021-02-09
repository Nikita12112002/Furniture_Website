import React from "react";

import {Route , Switch} from 'react-router-dom';

import About from "./About";

import Contact from "./Contact";

import Error from "./Error";

import Service from "./Service";

function name(){
    return(
        <h1>Hello !! I am a Name page</h1>
    );

}

function App(){


    return(
        <> 

        
        <Switch>
            <Route exact path="/" component={About}/>
            <Route exact path="/service" component={Service}/>
            <Route exact path="/contact" component={Contact}/>
            <Route  path="/contact/name" component={name}/>
            <Route component={Error}/>
        </Switch>

        </>
    );

}

export default App;