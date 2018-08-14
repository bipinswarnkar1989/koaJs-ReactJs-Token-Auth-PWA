import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import red from '@material-ui/core/colors/red';

const styles = {
   container:{
       display: 'flex',
       backgroundColor: 'DodgerBlue',
       
   },
   userContainer:{
    display: 'flex',
     flexDirection: 'column',
     width:'100%',
   },
   userDiv:{
       display: 'flex',
       flexDirection: 'row',
       width:'100%',
       padding: 10,
       height:'100%'
   },
   avatar: {
    backgroundColor: red[500],
  },
  fullname:{

  },
  userNameDiv:{
      alignSelf: 'center',
      padding: 4,
  }
}

class AddPost extends Component {
    componentDidMount(){
        this.props.mappedupdateAppTitle('Create Post');
    }
    render() {
        const { classes } = this.props;
        const { isLoggedIn, user, error } = this.props.auth;
        if(!user) return null;
        return (
            <div className={classes.container}>
            <div className={classes.userContainer}>
            <Card>
            <div className={classes.userDiv}>
            <div>
            <Avatar aria-label={user.firstname} className={classes.avatar}>
                {user.firstname.charAt(0)}
              </Avatar> 
            </div> 
              <div className={classes.userNameDiv}>
              <span className={classes.fullname}>
                    {`${user.firstname} ${user.lastname}`}
              </span>
              </div>
            </div>
            </Card>
            </div>
            
                
            </div>
        );
    }
}

export default withStyles(styles)(AddPost);