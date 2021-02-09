import React from "react";
import "./CheckoutProduct.css";
import {useStateValue} from "./StateProvider";

function CheckoutProduct({id ,title,image, price , rating})
{
  const[{basket} , dispatch] = useStateValue();

  console.log(id , title , image , price ,rating);

  const removeFromBasket = ()=>{

    dispatch({
      type:"REMOVE_FROM_BASKET",
      id:id,
    });

  };
  return(
    <>

    <div className="checkoutProduct" >

      <img className="checkoutProduct_image" src={image} style={{width:"400px",height:"400px", marginLeft:"75px", marginTop:"30px"}} alt=""/>
       
      <div className="checkoutProduct_info"  style={{fontFamily: "Langar cursive" , fontSize:"25px" ,marginTop:"130px", marginLeft:"100px" }}>
      <p className="checkoutProduct_title"style={{fontFamily: "Langar cursive" , fontSize:"25px" , marginLeft:"100px" }}>{title}</p>

      <p className="checkoutProduct_price"  style={{fontFamily: "Langar cursive" , fontSize:"25px" , marginLeft:"190px", marginTop:"-20px"}}>
        <small>Rs</small>
        <strong>{price}</strong>
      </p>

      

      <div className="product_rating">
           {Array(rating)

           .fill()
           .map((_) =>(
             <p><img 
                src="https://i.pinimg.com/736x/a6/d0/57/a6d05721c9eb6cf87ac890b6c1f0c412.jpg"
                 style={{width:"120px" , height:"40px" , marginLeft:"170px" , marginTop:"-30px"}} /></p>
           ))
           
           }
         </div>

         <button onClick={removeFromBasket} style={{marginLeft:"75px" , width:"350px"}}>Remove from basket</button>
      </div>

    </div>
  
    </>
  );
}

export default CheckoutProduct;














/*import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';

import Review from './Review';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Shipping address',  'Review your order'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
      case 1:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
       </main>
    </React.Fragment>
  );
}*/
 