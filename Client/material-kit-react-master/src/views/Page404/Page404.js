import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import Danger from "components/Typography/Danger.js";
import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function NotFoundPage(props) {
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
        brand="404 Page Not Found"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
 <Parallax image={require("assets/img/404.jpg")} className="wallpaper-404">
        <div className={classes.container}>
            <div className="title-404-wrapper">
                <GridContainer>
                    <GridItem>
                    <div className={classes.brand}>
                        <storng><h1 className={classes.title}>404</h1>
                        <h2 className={classes.subtitle}>
                            Page Not Found.
                        </h2>
                        </storng>
                    </div>
                    </GridItem>
                </GridContainer>
          </div>
        </div>
      </Parallax>
      <Footer />
    </div>
  );
}
