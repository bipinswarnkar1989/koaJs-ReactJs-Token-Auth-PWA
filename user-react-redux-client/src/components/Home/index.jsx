import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root: {
      flexGrow: 1,
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

class Home extends Component {
    render() {
        const { classes } = this.props;
        return (
    <div className={classes.root}>
      <h2>Home</h2>
    </div>
        );
    }
}


export default withStyles(styles)(Home);