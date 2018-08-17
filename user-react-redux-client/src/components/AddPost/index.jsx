import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import red from '@material-ui/core/colors/red';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import classNames from 'classnames';
import './index.css';
import axios from 'axios';
const styles = {
   container:{
       flex: 1,
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
      justifyContent: 'flex-start',
      padding: 1,
      backgroundColor:'white'
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
    position:'absolute',
    width:'100%',
    height:'100%'
  }
}

class AddPost extends Component {
    componentDidMount(){
        this.props.mappedupdateAppTitle('Create Post');
    }
    handleImageUpload(event){
        var output = document.getElementById('output');
        const data = new FormData();
        data.append('file', event.target.files[0]);
        data.append('user', this.props.auth.user._id);
        //data.append('description', 'some value user types');

        var config = {
            onUploadProgress: function(progressEvent) {
              var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
            }
          };

          axios.post('/create-post-draft', data, config)
          .then(function (res) {
            output.className = 'container';
            output.innerHTML = res.data;
          })
          .catch(function (err) {
            output.className = 'container text-danger';
            output.innerHTML = err.message;
          });
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
            <div><div className="_5cqb"><span>
                <div ariaLabel="Add photo" className="_vbz" tabIndex="0">
                <input onChange={e => this.handleImageUpload(e)} accept="image/*" type="file" className={classes.fileInput}/><div className="_4g33"><div className="_2-24 _4g34 _5i2i _52we"><div className="_vbx"><div className="_vby"></div><div className="_vbw">Photo</div></div></div></div></div>

            <div ariaLabel="Add Video" class="_vbz" dataSigil="touchable" tabIndex="0" role="button"><div className="_4g33">
            <input accept="video/*" type="file" className={classes.fileInput}/>
            <div className="_2-24 _4g34 _5i2i  _52we"><div className="_vbx"><div className="_vby"></div><div className="_vbw">Video</div></div></div></div></div></span></div>
        </div>
            </div>

        <div className={classes.submitBtnDiv}>
        <div id="output"></div>
        <Button variant="contained" size="large" color="primary" className={classes.submitbutton}>
          Post
        </Button>
        </div>
        {/* <div ariaLabel="Add photo" className="_vbz" tabIndex="0" role="button"><div className="_4g33"><div className="_2-24 _4g34 _5i2i  _52we"><div className="_vbx"><div className="_vby"></div><div className="_vbw">Photo</div></div></div></div></div> */}
        
        


        
            </div>
        );
    }
}

export default withStyles(styles)(AddPost);