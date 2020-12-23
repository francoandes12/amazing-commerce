import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography
} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import logo from '../../assets/commerce.png'
import useStyles from './styles'
import { Link, useLocation } from 'react-router-dom'
const Navbar = ({ totalItems }) => {
  const classes = useStyles()
  const location = useLocation()
  return (
    <>
      <AppBar position='fixed' color='inherit' className={classes.appBar}>
        <Toolbar>
          <Typography
            component={Link}
            to='/'
            variant='h6'
            color='inherit'
            className={classes.title}>
            <img
              src={logo}
              alt='Amazing Commerce'
              height='25px'
              className={classes.image}
            />
            Amazing Commerce
          </Typography>
          <div className={classes.grow} />
          {location.pathname === '/' && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to='/cart'
                aria-label='Show cart items'
                color='inherit'>
                <Badge badgeContent={totalItems} color='secondary'>
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
