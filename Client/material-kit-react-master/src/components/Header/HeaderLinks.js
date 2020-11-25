/*eslint-disable*/
import React from 'react'
// react components for routing our app without refresh

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Tooltip from '@material-ui/core/Tooltip'

// @material-ui/icons
import Face from '@material-ui/icons'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';

// core components
import Button from 'components/CustomButtons/Button.js'

import Cookies from 'js-cookie'
import styles from 'assets/jss/material-kit-react/components/headerLinksStyle.js'

const useStyles = makeStyles(styles)

export default function HeaderLinks (props) {
  const classes = useStyles()

  function UserOnline(){
    if(Cookies.get('userName') != undefined){
      return (
        <span>
        <ListItem className={classes.listItem}>
        <Button
          href='/profile-page'
          color='transparent'
          className={classes.navLink}
        >
          <PersonIcon className={classes.inputIconsColor} /> {Cookies.get('userName')}
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href='/'
          color='transparent'
          className={classes.navLink}
          onClick ={()=>{
            Cookies.remove('userName');
            Cookies.remove('userId');
          }}
        >
          <ExitToAppIcon className={classes.inputIconsColor} /> Log Out
        </Button>
      </ListItem>
      </span>
      )
    }
    else {
      return (
        <span>
        <ListItem className={classes.listItem}>
        <Button
          href='/login-page'
          color='transparent'
          className={classes.navLink}
        >
          {' '}
          <span class='material-icons'>login</span> Login
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href='/register-page'
          color='transparent'
          className={classes.navLink}
        >
          <span class='material-icons'>account_circle</span> Register
        </Button>
      </ListItem>
      </span>
      )
    }
  }

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button href='/' color='transparent' className={classes.navLink}>
          {' '}
          <HomeIcon className={classes.inputIconsColor} />
        </Button>
      </ListItem>
      {UserOnline()}
      <ListItem className={classes.listItem}>
        <Button
          href='/about-page'
          color='transparent'
          className={classes.navLink}
        >
          <InfoIcon className={classes.inputIconsColor} /> About
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href='/contact-page'
          color='transparent'
          className={classes.navLink}
        >
          <AlternateEmailIcon className={classes.inputIconsColor} /> Contact
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id='instagram-twitter'
          title='Follow us on twitter'
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href='https://twitter.com/CreativeTim?ref=creativetim'
            target='_blank'
            color='transparent'
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-twitter'} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id='instagram-facebook'
          title='Follow us on facebook'
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color='transparent'
            href='https://www.facebook.com/CreativeTim?ref=creativetim'
            target='_blank'
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-facebook'} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id='instagram-tooltip'
          title='Follow us on instagram'
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color='transparent'
            href='https://www.instagram.com/CreativeTimOfficial?ref=creativetim'
            target='_blank'
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-instagram'} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  )
}
