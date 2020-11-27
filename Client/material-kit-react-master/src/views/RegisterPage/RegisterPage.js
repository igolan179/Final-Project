import React from "react";
import { Router, Route, Switch,Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Face from "@material-ui/icons/Face";
import Smartphone from "@material-ui/icons/Smartphone";
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import swal from 'sweetalert'

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg_register.jpg";

const useStyles = makeStyles(styles);


export default function RegisterPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  const [customerId, setCustomerId] = React.useState("");
  const [customerPass, setCustomerPass] = React.useState("");
  const [customerName, setCustomerName] = React.useState("");
  const [customerPhone, setCustomerPhone] = React.useState("");
  const [customerPassConfirm, setCustomerPassConfirm] = React.useState("");


  function isIsraeliIdNumber(id) { // By Shlomi Turjeman
    id = String(id).trim();
    if (id.length > 9 || isNaN(id)) return false;
    id = id.length < 9 ? ("00000000" + id).slice(-9) : id;
      return Array.from(id, Number).reduce((counter, digit, i) => {
        const step = digit * ((i % 2) + 1);
        return counter + (step > 9 ? step - 9 : step);
      }) % 10 === 0;
  }

  function idConfirm(){
    if(customerId.length < 9){
      return (
        <CustomInput
          labelText="ID Number"
          id="Id"
          error
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            onChange: (e) => setCustomerId(e.target.value),
            type: "number",
            endAdornment: (
              <InputAdornment position="end">
                <Person className={classes.inputIconsColor} />
              </InputAdornment>
            )
          }}
        />
      )
    }
    else if(isIsraeliIdNumber(customerId)){
      return (
        <CustomInput
          labelText="ID Number"
          id="Id"
          success
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            onChange: (e) => setCustomerId(e.target.value),
            type: "number",
            endAdornment: (
              <InputAdornment position="end">
                <Person className={classes.inputIconsColor} />
              </InputAdornment>
            )
          }}
        />
      )
    }
    else {
      return (
        <CustomInput
          labelText="ID Number"
          id="Id"
          error
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            onChange: (e) => setCustomerId(e.target.value),
            type: "number",
            endAdornment: (
              <InputAdornment position="end">
                <Person className={classes.inputIconsColor} />
              </InputAdornment>
            )
          }}
        />
      )
    }

  }

  function passValidation(){
    if(customerPass.length > 10 || customerPass.length <= 5){
      return (
        <CustomInput
          labelText="Password"
          id="pass"
          error
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            onChange: (e) => setCustomerPass(e.target.value),
            type: "password",
            endAdornment: (
              <InputAdornment position="end">
                <Icon className={classes.inputIconsColor}>
                  lock_outline
                </Icon>
              </InputAdornment>
            ),
            autoComplete: "off"
          }}
        />
      )
    } else{
      return (
        <CustomInput
          labelText="Password"
          id="pass"
          success
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            onChange: (e) => setCustomerPass(e.target.value),
            type: "password",
            endAdornment: (
              <InputAdornment position="end">
                <Icon className={classes.inputIconsColor}>
                  lock_outline
                </Icon>
              </InputAdornment>
            ),
            autoComplete: "off"
          }}
        />
      )
    }
  }

  function passConfirm(){
    if(customerPassConfirm.length < 1)
    {
      return (
        <CustomInput
      labelText="Confirm Password"
      id="pass-confirm"
      error
      formControlProps={{
        fullWidth: true
      }}
      inputProps={{
        onChange: (e) => setCustomerPassConfirm(e.target.value),
        type: "password",
        endAdornment: (
          <InputAdornment position="end">
            <Icon className={classes.inputIconsColor}>
              lock_open
            </Icon>
          </InputAdornment>
        ),
        autoComplete: "off"
      }}
    />
      )
    }
    else if(customerPass == customerPassConfirm){
      return (
      <CustomInput
      labelText="Confirm Password"
      id="pass-confirm"
      success
      formControlProps={{
        fullWidth: true
      }}
      inputProps={{
        onChange: (e) => setCustomerPassConfirm(e.target.value),
        type: "password",
        endAdornment: (
          <InputAdornment position="end">
            <Icon className={classes.inputIconsColor}>
              lock_outline
            </Icon>
          </InputAdornment>
        ),
        autoComplete: "off"
      }}
    />
    )
    }
    else {
      return (
      <CustomInput
      labelText="Confirm Password"
      id="pass-confirm"
      error
      formControlProps={{
        fullWidth: true
      }}
      inputProps={{
        onChange: (e) => setCustomerPassConfirm(e.target.value),
        type: "password",
        endAdornment: (
          <InputAdornment position="end">
            <Icon className={classes.inputIconsColor}>
              lock_open
            </Icon>
          </InputAdornment>
        ),
        autoComplete: "off"
      }}
    />
      )
    }

  }

  function Register() {
    fetch('https://localhost:44361/api/login/InsertCustomer', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        customerId:  customerId ,
        customerPass:  customerPass ,
        customerName:  customerName ,
        customerPhone:  customerPhone 
      })
    }).then((Response) => Response.json())
      .then((Result) => {
        if (Result.Status == 'Success'){
          swal({
            title: "Success!",
            text: Result.Message,
            icon: "success",
          })
          .then(() => {
            
              });
        }
        else{
          swal({
            title: "Error!",
            text: Result.Message,
            icon: "error",
          }).catch(err => {
            if (err) {
              swal("Error!", "The server is offline!", "error");
            } else {
              swal.stopLoading();
              swal.close();
            }
          });
        }
      })
  }


  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Register"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="info" className={classes.cardHeader}>
                    <h4>Register</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-google-plus-g"} />
                      </Button>
                    </div>
                  </CardHeader>
                  <p className={classes.divider}>Or Be Classical</p>
                  <CardBody>
                    {idConfirm()}
                    {passValidation()}
                    {passConfirm()}
                    <CustomInput
                      labelText="Full Name..."
                      id="name"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: (e) => setCustomerName(e.target.value),
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Face className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Phone Number..."
                      id="phone"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: (e) => setCustomerPhone(e.target.value),
                        type: "number",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Smartphone className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="info" size="lg"
                      onClick={()=>Register()}>
                      Register
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
