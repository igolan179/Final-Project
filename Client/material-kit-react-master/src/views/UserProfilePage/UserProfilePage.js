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

import logo from "assets/img/faces/card-profile4-square.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

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
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
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
                    <h1 className={classes.title}>User Name Here</h1>
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
            <div className={classes.description+" Custom-tabs-wrapper"}>
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
                                inputProps={{ placeholder: "Choose Here..." }}
                              />
                            </FormControl>
                          </GridItem>
                        </GridContainer>
                      </GridItem>
                    )
                  },
                  {
                    tabName: "Edit Appointment",
                    tabIcon: EventNoteIcon,
                    tabContent: (
                      <p className={classes.textCenter}>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. I will be the leader of a company
                        that ends up being worth billions of dollars, because I
                        got the answers. I understand culture. I am the nucleus.
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at.
                      </p>
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
