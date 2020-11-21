/*eslint-disable*/
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
// react components for routing our app without refresh
import { Link } from 'react-router-dom'

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Tooltip from '@material-ui/core/Tooltip'

// @material-ui/icons
import { Apps, Face, CloudDownload } from '@material-ui/icons'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info';
// core components
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.js'
import Button from 'components/CustomButtons/Button.js'

import styles from 'assets/jss/material-kit-react/components/headerLinksStyle.js'

const useStyles = makeStyles(styles)

export default function HeaderLinks (props) {
  const classes = useStyles()
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button href='/' color='transparent' className={classes.navLink}>
          {' '}
          <HomeIcon className={classes.inputIconsColor} />
        </Button>
      </ListItem>
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
