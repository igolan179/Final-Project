import React from "react";
import { Router, Route, Switch, Link } from "react-router-dom";
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
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import swal from 'sweetalert'
import Cookies from 'js-cookie'
import styles from "assets/jss/material-kit-react/views/loginPage.js";


const useStyles = makeStyles(styles);

export default function RegisterPage(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const [customerPass, setCustomerPass] = React.useState("");
    const [customerName, setCustomerName] = React.useState("");
    const [customerPhone, setCustomerPhone] = React.useState("");

    // function getInfo() {
    //     fetch('https://localhost:44361/api/customer/GetInfo', {
    //         method: 'post',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             response: Cookies.get('userId')
    //         })
    //     }).then((Response) => Response.json())
    //         .then((Result) => {
    //             if (Result.id != null) {
    //                 setCurrentCustomerName(Result.id);
    //                 setCurrentCustomerPhone(Result.phone);
    //                 console.log(CurrentcustomerName);
    //                 console.log(CurrentcustomerPhone)
    //             }
    //             else {
    //                 swal({
    //                     title: "Error!",
    //                     text: Result.Message,
    //                     icon: "error",
    //                 }).catch(err => {
    //                     if (err) {
    //                         swal("Error!", "The server is offline!", "error");
    //                     } else {
    //                         swal.stopLoading();
    //                         swal.close();
    //                     }
    //                 });
    //             }
    //         })
    // }

    function SubmitChanges() {
        console.log(customerName)
        console.log(customerPhone)
        console.log(customerPass)
        fetch('https://localhost:44361/api/customer/SubmitInfo', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: Cookies.get('userId'),
                name: customerName,
                phone: customerPhone,
                password: customerPass,
            })
        }).then((Response) => Response.json())
            .then((Result) => {
                if (Result.Status == 'Success') {
                    swal({
                        title: "Success!",
                        text: Result.Message,
                        icon: "success",
                    }).then(()=>{
                        Cookies.set('userName',customerName)
                        window.location.reload(false)
                    })
                }
                else {
                    swal({
                        title: "Error!",
                        text: Result.Message,
                        icon: "error",
                    })
                }
            })
            .catch(err => {
                        if (err) {
                            swal("Error!", "The server is offline!", "error");
                        } else {
                            swal.stopLoading();
                            swal.close();
                        }
                    });
    }


    return (
        <div>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                    <h2>Edit Details</h2>
                        <form className={classes.form}>
                            <CustomInput
                                labelText="Name"
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
                                labelText="Phone Number"
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
                            <CustomInput
                                labelText="Password"
                                id="Password"
                                value=""
                                formControlProps={{
                                    fullWidth: true
                                }}
                                inputProps={{
                                    onChange: (e) => setCustomerPass(e.target.value),
                                    type: "password",
                                    endAdornment: (
                                        <Icon className={classes.inputIconsColor}>
                                            lock_open
                                        </Icon>
                                    )
                                }}
                            />
                            <Button simple color="primary" size="lg"
                                onClick={() => SubmitChanges()}>
                                Submit
                            </Button>
                        </form>
                    </GridItem>
                </GridContainer>
            <Footer whiteFont />
        </div >
    )
}