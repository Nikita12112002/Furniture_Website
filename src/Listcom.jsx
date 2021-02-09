import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import { useState } from "react";


const Listcom =(props)=> {

    const [line ,setline]=useState(false);

    const cutIT =()=>{

        setline(true);

    };
    return(

        <div className="todo_style">

        <span onClick={cutIT}><DeleteIcon className="deleteIcon"/></span>
           
           <li style={{ textDecoration : line ?"line-through" : "none"}}>{props.text}</li>


        </div>
    );
}

export default Listcom;