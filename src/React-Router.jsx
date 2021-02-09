import React from "react";

import {Route , Switch ,Redirect} from 'react-router-dom';

import About from "./About";

import Contact from "./Contact";

import Error from "./Error";
import Navbar from "./Navbar";
import Service from "./Service";
import User from "./User";
import Search from "./Search";

function name(){
    return(
        <h1>Hello !! I am a Name page</h1>
    );

}

function App(){


    return(
        <> 

        <Navbar/>                

        <Switch>
            <Route exact path="/" component={ function(){ return <About name="About"/> }}/>

            <Route exact path="/contact" component={Contact}/>

            <Route exact path="/search" component={Search}/>

            <Route exact path="/service" render={ ()=>  <About name="Service" /> } />

            <Route exact path="/user/:fname/:lname" component={User}/>

            <Route  path="/contact/name" component={name}/>

            <Route component={Error}/> 

            //Redirect statements are used when we dont want to make error 404 page//

            <Redirect to="/"></Redirect>
        </Switch>

        </>
    );

}

export default App;