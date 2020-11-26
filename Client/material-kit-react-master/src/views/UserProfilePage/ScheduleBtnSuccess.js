import React from "react";

import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import ScheduleIcon from '@material-ui/icons/Schedule';
// core components
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";


import Cookies from 'js-cookie'


import styles from "assets/jss/material-kit-react/views/profilePage.js";
const useStyles = makeStyles(styles);

export default function ScheduleBtnSuccess(time) {
    const classes = useStyles();
    const [btnColor, setbtnColor] = React.useState(true);
    const handleClick = () => {
        setbtnColor(!btnColor);
      };

    function time_convert(num)
    { 
    var hours = Math.floor(num / 60);  
    var minutes = num % 60;
    if(minutes == 0) minutes = minutes +"0"; 
    return hours + ":" + minutes;         
    }

    return (
        <span>
            <GridItem xs={12} sm={12} md={2} className="schedule-grid">
            <Button
                className = "schedule-Btn"
                color ={btnColor ? "success" : "warning"}
                round
                onClick = {(e)=>{
                    handleClick();
                    Cookies.set('userQueue',time_convert(time));
                }}
                >
                <ScheduleIcon className={classes.inputIconsColor} /> {time_convert(time)}
            </Button>
        </GridItem>
        </span>
    );
}