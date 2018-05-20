import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
    render() {
        const styles = {
            container:{
                textAlign:'center'
            }
        }
        return (
            <div style={styles.container}>
              <h2>HOME</h2>  
            </div>
        );
    }
}

Home.propTypes = {

};

export default Home;