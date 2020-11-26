import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import ScheduleIcon from '@material-ui/icons/Schedule';
// core components
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";

import Cookies from 'js-cookie'


import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);
export default function ScheduleBtnError(time) {
    const classes = useStyles();

    function time_convert(num)
    { 
    var hours = Math.floor(num / 60);  
    var minutes = num % 60;
    if(minutes == 0) minutes = minutes +"0"; 
    return hours + ":" + minutes;         
    }

    
    return (
        <span>
            <GridItem xs={12} sm={12} md={12} className="schedule-grid">
            <Button
                className = "schedule-Btn"
                color ='error'
                disable
                round>
                <ScheduleIcon className={classes.inputIconsColor} /> {time_convert(time)}
            </Button>
        </GridItem>
        </span>
    );
}