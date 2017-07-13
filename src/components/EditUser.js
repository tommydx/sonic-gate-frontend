import React, { Component } from 'react';
import axios from 'axios';

import Nav from './Nav';
import GearDisplay from './GearDisplay';
import Footer from './Footer';

class EditUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: []
    }
  }

  componentDidMount() {
    axios
    .get(` ${this.props.params.user_id}`, {
      // headers: {
      //   'Authorization': window.localStorage.getItem('token')
      // }
    })
    .then((response) => {
      const userData = response.data;
      this.setState({
        user: userData
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <Nav userId={this.props.params.user_id}/>
        <div className='content-wrapper'>
          <div className='dashboard-wrapper'>
            <GearDisplay userId={this.state.user} theUserId={this.props.params.user_id}/>
            <div className='places-been-container'>
              <div className='signup-container'>
                <EditUserForm userId={this.state.user} theUserId={this.props.params.user_id}/>
              </div>
            </div>
          </div>
        </div>
        <Appfooter />
      </div>
    );
  }
}

export default EditUser;
