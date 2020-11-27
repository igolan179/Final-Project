import React from "react";

import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import ScheduleIcon from '@material-ui/icons/Schedule';
// core components
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import swal from 'sweetalert'
import Cookies from 'js-cookie'


import styles from "assets/jss/material-kit-react/views/profilePage.js";
const useStyles = makeStyles(styles);

export default function ScheduleBtn(props) { // {9, 12, 16,}
    const { schedule } = props;
    const classes = useStyles();
    const [btnColor, setbtnColor] = React.useState(true);

    function AppointmentHandler(time) {
        swal({
            text: 'Please Type a Treatment',
            content: "input",
            button: {
              text: "Make an Appointment!",
              closeModal: false,
            },
          })
          .then((value) => {
            return fetch('https://localhost:44361/api/queue/SetQueue', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    customerId: Cookies.get('userId'),
                    customerQueueDate: Cookies.get('userDate'),
                    customerQueueTime: time.slice(0, 2),
                    customerTreatment: value,
              })
            });
          })
          .then((Response) => Response.json())
          .then((Result) => {
            if (Result.Status == 'Success'){
                swal({
                    title: "Success!",
                    text: Result.Message,
                    icon: "success",
                  })
            }
            else{
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
          
    function BtnCreator(hour) {
        var flag = false;
        if (schedule == null) return ""
        for (var i = 0; i < schedule.length; i++) {
            if (schedule[i] == hour) {
                flag = true;
                return (
                    <span>
                        <GridItem xs={12} sm={12} md={2} className="schedule-grid">
                            <Button
                                className="schedule-Btn"
                                color="danger"
                                round
                                disabled
                            >
                                <ScheduleIcon className={classes.inputIconsColor} /> {hour}:00
                        </Button>
                        </GridItem>
                    </span>
                )
            }
        }
        if (!flag) {
            return (
                <span>
                    <GridItem xs={12} sm={12} md={2} className="schedule-grid">
                        <Button
                            className="schedule-Btn"
                            color="success"
                            round
                            onClick={(event) => {
                                AppointmentHandler(hour)

                            }}
                        >
                            <ScheduleIcon className={classes.inputIconsColor} /> {hour}:00
                        </Button>
                    </GridItem>
                </span>
            )
        }
    }

    return (
        <span>
            {BtnCreator('09')}
            {BtnCreator('10')}
            {BtnCreator('11')}
            {BtnCreator('12')}
            {BtnCreator('13')}
            {BtnCreator('14')}
            {BtnCreator('15')}
            {BtnCreator('16')}
        </span>
    )
}