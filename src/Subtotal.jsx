import React from "react";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";
import CurrencyFormat from "react-currency-format";
import {NavLink} from "react-router-dom"

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="container-fluid bg-white border offset-10 " style={{width:"250px", marginTop:"-900px"}}>
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):<strong>{value}</strong>
              {console.warn(value)}
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        thousandSeperator={true}
        displayType={"text"}
        prefix={"Rs"}
      />
      <NavLink to="/checkout">
        <button style={{  background:"#f0c14b",
    border:"1px solid",
    marginTop: "10px",
    borderColor: "#a88734 #9c7e31 #846a29",
    color:"#111"}}>Proceed to checkout</button>
      </NavLink>
      
    </div>
    </div>
  );
}

export default Subtotal;