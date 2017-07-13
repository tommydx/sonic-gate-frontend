import React, { Component } from 'react';
import axios from 'axios';
import { Link, browserHistory } from 'react-router';

class Nav extends Comoonent {
  constructor(props) {
    super(props);

    this.state = {
      user: []
    };
  }

  handleLogout(event) {
    event.preventDefault();
    window.localStorage.removeItem('token');
    browserHistory.push('/');
  }

  componentDidMount() {
    axios
      .get(` ${this.props.userId}`, {
        headers: {
          'Authorization': window.localStorage.getItem('token')
        }
      })
      .then((response) => {
        const userData = response.data;
        this.setState({
          user:userData
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (

    );
  }
}
