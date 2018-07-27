import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import withMuiRoot from '../../withMuiRoot';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import SideMenu from '../SideMenu';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class Appwrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen:false,
    }
  }
  
  toggleDrawer(open){
      this.setState({
        drawerOpen:open
      })
  }

  render() {
    const { classes } = this.props;
    const { drawerOpen }  = this.state;
    const { user, isLoggedIn } = this.props.auth;
    return (
      <div>
        <AppBar position="static">
        <Toolbar>
          <IconButton onClick={() => this.toggleDrawer(true)} className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            MernSocial
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
          open={drawerOpen}
          onClose={() => this.toggleDrawer(false)}
          onOpen={() => this.toggleDrawer(true)}
          disableSwipeToOpen={isLoggedIn ? false : true}
          className={classes.sideDrawer}
        >
          <div >
            <SideMenu/>
          </div>
        </SwipeableDrawer>
      </div>
    )
  }
};

export default withMuiRoot(withStyles(styles)(Appwrapper));
