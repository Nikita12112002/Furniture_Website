
import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { auth } from "./Fire";
import { useHistory } from "react-router-dom";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();

  const login = (e) => {
    e.preventDefault();
    //login logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in ,redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
   <>

<img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ5Vc8q0BzR9weCUD8zLx_h_DcU4bv780urw&usqp=CAU"
     
    style={{width:"700px", height:"150px" , marginLeft:"350px", marginTop:"-10px"}} 

   />
   <div className='login'>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoFocus
              
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='warning' />}
              label='Remember me'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              onClick={login}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <NavLink exact  className="nav-link sell" to='/Registration' variant='body2'> 
                  {"Don't have an account? Sign Up"}
                </NavLink>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>


       <br/><br/><br/><br/><br/>

       <div style={{backgroundColor:"#0c072e"}}>
                     <div style={{backgroundColor:"#0c072e", marginTop:"30px"}}>


                      
                      
                      <div style={{float:"left" , marginLeft:"200px"  , color:"white"  }}>
                      <h5>GET TO KNOW US</h5>
                      <br/>
                      
                      About Us<br/>
                      Careers <br/>
                   Press Releases <br/>
                   2N Cares<br/>
                   Gift a Smile<br/>
                     
                     </div>

                     
                          
                     <div style={{float:"left" , marginLeft:"220px" , color:"white"}}>

                     <h5>Connect with Us</h5><br/>
                        Facebook<br/>
                       Twitter<br/>
                        Instagram <br/>

                     </div>

                     <div style ={{float:"left" , marginLeft:"220px" , color:"white" }}>
                       <h5>Make Money with Us</h5>
                       <br/>
                       Sell on 2N <br/>
Sell under 2N Accelerator <br/>
Become an Affiliate <br/>
Fulfilment by 2N <br/>
Advertise Your Products <br/>
2N Pay on Merchants <br/>
                     </div>
                     </div>

                    

                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <br/>

                      <hr></hr>

                     <span style={{fontWeight:"bolder" ,textAlign:"center" ,marginLeft:"700px" , color:"white"}}>2N  </span>

                     <br/>

                     <div style={{marginLeft:"200px" , color:"white"}} >

                     Australia Brazil Canada China France Germany Italy Japan Mexico Netherlands
                     Singapore Spain United Arab Emirates United Kingdom United States
                     </div>
                   
                     </div>
                 

    </>
  );
}