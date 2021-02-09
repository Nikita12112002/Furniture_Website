import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useStateValue} from "./StateProvider";
import Reducer from "./Reducer";



const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  
  },
}))(Badge);

export default function CustomizedBadges() {

  const[{basket}] = useStateValue();

   console.log(basket);
   
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={basket?.length} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}