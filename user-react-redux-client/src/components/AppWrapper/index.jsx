import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import withMuiRoot from '../../withMuiRoot';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class Appwrapper extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            MernSocial
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      </div>
    )
  }
};

export default withMuiRoot(withStyles(styles)(Appwrapper));
