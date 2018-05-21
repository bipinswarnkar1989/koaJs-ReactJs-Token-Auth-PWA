import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import withMuiRoot from '../../withMuiRoot';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class Appwrapper extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
};

export default withMuiRoot(withStyles(styles)(Appwrapper));
