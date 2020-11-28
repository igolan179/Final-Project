import React, { useState } from 'react';
import { Router, Route, Switch, Redirect } from "react-router-dom";
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
    const { schedule, hour } = props;
    const classes = useStyles();
    const [btnColor, setbtnColor] = React.useState('success')

    var valueState;



    function AppointmentEditHandler(time) {
        console.log(valueState)
        fetch('https://localhost:44361/api/queue/EditQueue', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                customerId: Cookies.get('userId').toString(),
                customerQueueDate: Cookies.get('userDate'),
                customerQueueTime: time.slice(0, 2),
                customerTreatment: valueState,
            })
        })
            .then((Response) => Response.json())
            .then((Result) => {
                if (Result.Status == 'Success') {
                    swal({
                        title: "Success!",
                        text: Result.Message,
                        icon: "success",
                    }).then(() => {
                        setbtnColor('danger');
                        window.location.reload(false);
                    })
                } else {
                    swal({
                        title: "Error!",
                        text: Result.Message,
                        icon: "error",
                    })
                }
            }).catch(err => {
                if (err) {
                    swal("Error!", "The server is offline!", "error");
                } else {
                    swal.stopLoading();
                    swal.close();
                }
            });
    }

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
                valueState= value;
                console.log(valueState)
                return fetch('https://localhost:44361/api/queue/SetQueue', {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        customerId: Cookies.get('userId').toString(),
                        customerQueueDate: Cookies.get('userDate'),
                        customerQueueTime: time.slice(0, 2),
                        customerTreatment: value,
                    })
                });
            })
            .then((Response) => Response.json())
            .then((Result) => {
                if (Result.Status == 'Success') {
                    swal({
                        title: "Success!",
                        text: Result.Message,
                        icon: "success",
                    }).then(() => {
                        setbtnColor('danger');
                        window.location.reload(false);
                })}
                else if (Result.Status == 'Exist') {
                    swal({
                        title: Result.Message,
                        text: "Do you wish to Switch your previous appointment and set this date?",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                    })
                        .then((willCancel) => {
                            if (willCancel) {
                                AppointmentEditHandler(time);
                            } else {
                                swal("Your previous appointment is saved.");
                            }
                        });
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

    function BtnCreator() {
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
                            color={btnColor}
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
            {BtnCreator()}
        </span>
    )
}