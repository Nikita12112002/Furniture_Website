import React, { useState } from 'react';

import Button from '@material-ui/core/Button';

import Listcom from "./Listcom";
import AddIcon from '@material-ui/icons/Add';


function App(){


    const [list , setlist] = useState("");

    const [ name , setname] = useState( [] );

    function Inputevent(event){

        setlist(event.target.value);
    }

    function submit(){

     setname( (oldItem)=>{
      
        return [...oldItem ,list];

        
        

     }

     
     );

     setlist('');
    
    }

    function change(){

        
    }

    return(

        <>
    
        <div className="center_div">
           
           <br/>

           <h1 style={{ backgroundColor :" blueviolet", color:"white"}}> TODO LIST</h1>

           <br/>
           

           

           <input type="text" placeholder="Add a list" onChange={Inputevent} value={list} /> 

           <Button  onClick={submit}  className="newBtn">  <AddIcon/> </Button>

           <br></br>



           <ol>

           
             
             {name.map(function(itemval,index){



                 return(

                    <Listcom key={index} text={itemval}/>
                     );
             }
              ) }
             
             </ol>
                 
        
        </div>

     </>

    );
}

export default App;