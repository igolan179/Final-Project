import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import swal from 'sweetalert'

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function ContactSection() {
  const classes = useStyles();


  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Contact Us</h2>
          <h4 className={classes.description}>
            Leave your info here and I will get back to you ASAP.
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button color="info"
                onClick={e => swal({
                  title: "Success!",
                  text: "Messege Received!",
                  icon: "success",
              })}
                >Send Message
                </Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
