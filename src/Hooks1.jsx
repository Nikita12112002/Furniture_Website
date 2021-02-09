import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const App=()=>{

    
  const [count ,setCount] = useState(0);

    const IncNum =() => {

        

         setCount( count+1);

        }
        

    
        const DecNum =() => {

           if(count>0){

            setCount( count-1);

           }

           else{

            alert("You have reached ur min limit");
           }
            

            
        }
        

    return(

        <>
        
        <div style={{backgroundColor:" ",width:"200px",marginLeft:"450px", marginTop:" 150px",height:"150px"}}>

        <h1> {count} </h1>

        <Tooltip title="Add">

        
        <Button onClick={IncNum}className="one" ><AddIcon/></Button>

        </Tooltip>

        

        <Tooltip title="Delete">


        <Button onClick={DecNum} className="two"> <DeleteIcon/> </Button>
        </Tooltip>

        </div>
       
        </>
    );

} 

export default App;