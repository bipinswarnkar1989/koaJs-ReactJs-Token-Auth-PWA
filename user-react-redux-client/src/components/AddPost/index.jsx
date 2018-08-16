import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import red from '@material-ui/core/colors/red';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import classNames from 'classnames';

const styles = {
   container:{
       
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
  },
  inputTextContainer:{
      width:'100%',
      flexDirection: 'column',
      padding: 10,
      backgroundColor: 'white',
  },
  textField:{
      width:'100%',
      
  },
  AddIcon:{
      display: 'block',
  },
  addMedia:{
      display: 'flex',
      justifyContent: 'space-around',
      padding: 2,
  },
  submitBtnDiv:{
      display: 'block',
      textAlign:'center',
      marginTop: 50,
      padding: 2,
  },
  submitbutton:{
      width:'99%'
  },
  fileInput:{
      opacity:0,
    display: 'block',
    filter: 'alpha(opacity=0)',
    position:'absolute'
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
            
            <div className={classes.inputTextContainer}>
            <div>
            <TextField
          id="textarea"
          
          placeholder="What's on your mind?"
          multiline
          className={classes.textField}
          margin="normal"
        />
            </div>
            </div>

            <div className={classes.addMedia}>
            <Button variant="contained" size="small" className={classes.button}>
        <AddIcon className={classNames(classes.AddIcon, classes.iconSmall)} />
        <input accept="image/*" type="file" className={classes.fileInput}/>
        Photo
      </Button>
      <Button variant="contained" size="small" className={classes.button}>
        <AddIcon className={classNames(classes.AddIcon, classes.iconSmall)} />
        <input accept="video/*" type="file" className={classes.fileInput}/>
        Video
      </Button>
            </div>

        <div className={classes.submitBtnDiv}>
        <Button variant="contained" size="large" color="primary" className={classes.submitbutton}>
          Post
        </Button>
        </div>
                
            </div>
        );
    }
}

export default withStyles(styles)(AddPost);