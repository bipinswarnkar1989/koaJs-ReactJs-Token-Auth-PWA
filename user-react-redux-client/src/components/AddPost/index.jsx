import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
   container:{
       display: 'flex',
   }
}

class AddPost extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                
            </div>
        );
    }
}

export default withStyles(styles)(AddPost);