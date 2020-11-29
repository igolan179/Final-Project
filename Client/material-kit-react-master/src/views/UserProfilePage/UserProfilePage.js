import React from "react";
// nodejs library that concatenates classes
import { Router, Route, Switch, Redirect } from "react-router-dom";
import classNames from "classnames";
// react plugin for creating date-time-picker
import Datetime from "react-datetime";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import EventBusyIcon from '@material-ui/icons/EventBusy';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import SettingsIcon from '@material-ui/icons/Settings';
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
import ScheduleBtn from 'views/UserProfilePage/ScheduleBtn.js'
import CancelForm from 'views/UserProfilePage/CancelForm.js'
import SettingsForm from 'views/UserProfilePage/SettingsForm.js'


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
  const [datePick, setdatePick] = React.useState(null);

  function reDirect() {
    if (Cookies.get('userId') == undefined) {
      return <Redirect to='/login-page' />
    }
  }


  function GetQueuesByDate(date) {
    fetch('https://localhost:44361/api/queue/GetQueues', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date: date,
      })
    }).then((Response) => Response.json())
      .then((Result) => {
        console.log(Result);
        setdatePick(Result);
      });
  }

  function GetAppointment() {
    if (Cookies.get('userId') == undefined) {
      return 
    }
    fetch('https://localhost:44361/api/queue/GetCustomerQueue', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date: Cookies.get('userId').toString(),
      })
    }).then((Response) => Response.json())
      .then((Result) => {
        console.log(Result);
        Cookies.set('appointmentDate', Result.date);
        Cookies.set('appointmentTime', Result.time)
        Cookies.set('appointmentTreatment', Result.treatment)
        Cookies.set('appointmentId', Result.id)
      });
  }

  return (
    <div>
      {reDirect()}
      {GetAppointment()}
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
                                    closeOnSelect
                                    onChange={(e) => {
                                      GetQueuesByDate(e.format("DD-MM-YYYY"));
                                      Cookies.set('userDate', e.format("DD-MM-YYYY"))
                                    }}
                                    inputProps={{ placeholder: "Choose Here..." }}
                                  />
                                </FormControl>
                              </GridItem>
                            </GridContainer>
                            <div className='schedule-wrapper'>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                  <ScheduleBtn
                                    schedule={datePick}
                                    hour='09'
                                  >
                                  </ScheduleBtn>
                                  <ScheduleBtn
                                    schedule={datePick}
                                    hour='10'
                                  >
                                  </ScheduleBtn>
                                  <ScheduleBtn
                                    schedule={datePick}
                                    hour='11'
                                  >
                                  </ScheduleBtn>
                                  <ScheduleBtn
                                    schedule={datePick}
                                    hour='12'
                                  >
                                  </ScheduleBtn>
                                  <ScheduleBtn
                                    schedule={datePick}
                                    hour='13'
                                  >
                                  </ScheduleBtn>
                                  <ScheduleBtn
                                    schedule={datePick}
                                    hour='14'
                                  >
                                  </ScheduleBtn>
                                  <ScheduleBtn
                                    schedule={datePick}
                                    hour='15'
                                  >
                                  </ScheduleBtn>
                                  <ScheduleBtn
                                    schedule={datePick}
                                    hour='16'
                                  >
                                  </ScheduleBtn>
                                </GridItem>
                              </GridContainer>
                            </div>
                          </div>
                          <GridItem xs={12} sm={12} md={12} justify="center">
                          </GridItem>
                        </GridItem>
                      )
                    },
                    {
                      tabName: "Cancel Appointment",
                      tabIcon: EventBusyIcon,
                      tabContent: (
                        <div>
                          <CancelForm
                          ></CancelForm>
                        </div>
                      )
                    },
                    {
                      tabName: "Settings",
                      tabIcon: SettingsIcon,
                      tabContent: (
                        <div>
                      <SettingsForm>
                        
                      </SettingsForm>
                        </div>
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
