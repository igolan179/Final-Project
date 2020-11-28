import React, { useState } from 'react';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import ScheduleIcon from '@material-ui/icons/Schedule';
import EventBusyIcon from '@material-ui/icons/EventBusy';
// core components
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import swal from 'sweetalert'
import Cookies from 'js-cookie'


import styles from "assets/jss/material-kit-react/views/profilePage.js";
const useStyles = makeStyles(styles);

export default function CancelForm() { // {9, 12, 16,}
    const classes = useStyles();

    

    function isCookieExist() {
        console.log(Cookies.get('appointmentId'));
        if (Cookies.get('appointmentId') == 'undefined') {
          return false;
        } else return true;
      }

      function CancelAppointmentHandler() {
        fetch('https://localhost:44361/api/queue/CancelQueue', {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            response: Cookies.get('userId').toString(),
          })
        }).then((Response) => Response.json())
          .then((Result) => {
            if (Result.Status == "Success") {
                swal({
                    title: "Success!",
                    text: Result.Message,
                    icon: "success",
                }).then(() => {Cookies.remove('appointmentDate');
                Cookies.remove('appointmentTime');
                Cookies.remove('appointmentTreatment');
                Cookies.remove('appointmentId');
                window.location.reload(false);})

            }
          });
      }
    

    return (
        <div>
        <div className={classes.title}>
          <h3>Your Appointment:</h3>
        </div>
        {isCookieExist() ? <h3>{Cookies.get('appointmentDate')} {Cookies.get('appointmentTime')}:00 for {Cookies.get('appointmentTreatment')}.</h3> : <h3>You don't have any appointments.</h3>}
        <br></br>
        {isCookieExist() ? <Button
          color="danger"
          round
          onClick={() => {
            CancelAppointmentHandler();
          }}
        ><EventBusyIcon className={classes.inputIconsColor} /> Cancel Appointment
      </Button> : <div></div>}
      </div>
    )
}