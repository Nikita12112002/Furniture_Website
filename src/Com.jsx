import React from 'react';
import { add, sub, mul, div } from './Function';

function Com(){

    return(
      <>
        <ul>
          
          <li> the sum of two numbers is {add(43,4)}</li>
        
          <li> the sum of two numbers is {sub(43,4)}</li>
          <li> the sum of two numbers is {mul(3,4)}</li>
          <li> the sum of two numbers is {div(10,5)}</li>
        </ul>

        
      </>

    );
}

export default Com;