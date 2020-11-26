import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin for creating date-time-picker
import Datetime from "react-datetime";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import EventBusyIcon from '@material-ui/icons/EventBusy';
import EventNoteIcon from '@material-ui/icons/EventNote';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import SettingsIcon from '@material-ui/icons/Settings';
import ScheduleIcon from '@material-ui/icons/Schedule';
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Parallax from "components/Parallax/Parallax.js";
import ScheduleBtnSuccess from 'views/UserProfilePage/ScheduleBtnSuccess.js'
import ScheduleBtnError from 'views/UserProfilePage/ScheduleBtnError.js'

import Cookies from 'js-cookie'
import logo from "assets/img/faces/default.jpg";


import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function UserProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const [datePick, setdatePick] = React.useState(undefined);
  const [customerQueue, setcustomerQueue] = React.useState("");

  var items = [];
  function ScheduleBtnHandler(){
    if(true){
    var time = 570;
    for(var i=0;i<10;i++){
      items.push(ScheduleBtnSuccess(time));
      time += 30;
    }
    time = 570;
    }
  }

  function reDirect(){
      if(Cookies.get('userId') == undefined){
        props.history.push('/login-page');
      }
  }
    function ScheduleHandler() {
      fetch('https://localhost:44361/api/login/Login', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerId: Cookies.get('customerId'),
          customerQueue: customerQueue
        })
      }).then((Response) => Response.json())
      .then((Result) => {});
    }
  
  return (
    <div>
      {reDirect()}
      <Header
        color="transparent"
        brand="Profile Page"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/userbg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={logo} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h1 className={classes.title}>{Cookies.get('userName')}</h1>
                    <hr></hr>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                    <h3>What Would You Like To Do?</h3>

                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                Choose from the following Tabs:{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
              <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Make an Appointment",
                    tabIcon: EventAvailableIcon,
                    tabContent: (
                      <GridItem xs={12} sm={12} md={12}>
                        <div className="schedule-grid">
                        <div className={classes.title}>
                          <h3>Pick Your Appointment Date</h3>
                        </div>
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={6}>
                            <InputLabel className={classes.label}>
                                Choose date and time:
                            </InputLabel>
                            <br />
                            <FormControl fullWidth>
                              <Datetime
                                timeFormat={false}
                                onChange={(e)=>{
                                  setdatePick(e.format("DD-MM-YYYY"));
                                }}
                                closeOnSelect
                                disableOnClickOutside={false}
                                inputProps={{ placeholder: "Choose Here..." }}
                              />
                            </FormControl>
                          </GridItem>
                        </GridContainer>
                        <div className='schedule-wrapper'>
                        <GridContainer>
                        {ScheduleBtnHandler()}
                        {items.map((x) => {
                          return x;
                        })} 
                        </GridContainer>
                        </div>
                      </div>
                      <GridItem xs={12} sm={12} md={12} justify="center">
                        <Button 
                        onClick={()=>{

                        }}
                        color="primary">Submit
                        </Button>
                      </GridItem>
                      </GridItem>
                    )
                  },
                  {
                    tabName: "Edit Appointment",
                    tabIcon: EventNoteIcon,
                    tabContent: (
                    <div>
                        
                    </div>
                    )
                  },
                  {
                    tabName: "Cancel Appointment",
                    tabIcon: EventBusyIcon,
                    tabContent: (
                      <p className={classes.textCenter}>
                        think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    )
                  },
                  {
                    tabName: "Settings",
                    tabIcon: SettingsIcon,
                    tabContent: (
                      <p className={classes.textCenter}>
                        think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    )
                  }
                ]}
              />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
