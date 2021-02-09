import React, { useState, useEffect } from "react";
import axios from "axios";

function App(){
    const[num ,setnum] =useState();
    const[name , setname]= useState();
    const[moves , setmoves]=useState();
   
    function submit(event){
        setnum(event.target.value)
    }
      useEffect(function(){
    async function getdata(){

        const res= await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
        setname(res.data.name);
        setmoves(res.data.moves.length);
    }
    getdata();

});

    return(
        <>
        <h1>U have selected <span style={{color:"red"}}> {num}</span></h1>
        <h1>My name is <span style={{color:"red"}}> {name} </span></h1>
        <h1>i have <span style={{color:"red"}}> {moves} </span>  moves</h1>

        <select  value={num} onChange={submit}>
            <option value='1'> 1 </option>
            <option value='25'> 25 </option>
            <option value='3'> 3 </option>
            <option value='4'> 4 </option>
            <option value='5'> 5 </option>
            <option value='6'> 6 </option>
            <option value='7'> 7 </option>
            <option value='8'> 8 </option>
            <option value='9'> 9 </option>
            <option value='10'> 10 </option>
        </select>

        </>
    );
}
export default App;