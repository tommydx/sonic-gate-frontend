import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

class EditUserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: ""
      lname: ""
      username: ""
      password: ""
      email: ""
      phone_number: ""
      address: ""
      photo: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios
    .get(` ${this.props.theUserId}`, {
      // headers: {
      //   'Authorization': window.localStorage.getItem('token')
      // }
    })
    .then((response) => {
      const userData = response.data;
      this.setState(userData);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
    .put(` ${this.props.theUserId}`, {
      user: this.state
    }, {
      // headers: {
      //   'Authorization': window.localStorage.getItem('token')
      // }
    })
    .then(() => {
      browserHistory.push(`/gear/${this.props.theUserId}`);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return(
      <div>
        <h1>Edit Account</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <div className='formLabel'>
              First Name
            </div>
            <span>
              <input onChange={this.handleChange} name='fname' type='text' value={this.state.fname} />
            </span>
          </div>

          <div >
            <div className='formLabel'>
              Last Name
            </div>
            <span>
              <input onChange={this.handleChange} name='lname' type='text' value={this.state.lname} />
            </span>
          </div>

          <div>
            <div className='formLabel'>
                Username
            </div>
            <span>
              <input onChange={this.handleChange} name='username' type='text' value={this.state.username} />
            </span>
          </div>

          <div>
            <div className='formLabel'>
              Password
            </div>
            <span>
              <input onChange={this.handleChange} name='password' type='password' value={this.state.password} />
            </span>
          </div>

          <div>
            <div className='formLabel'>
              Email
            </div>
            <span>
              <input onChange={this.handleChange} name='email' type='email' value={this.state.email} />
            </span>
          </div>

          <div>
            <div className='formLabel'>
              Phone Contact
            </div>
            <span>
              <input onChange={this.handleChange} name='phone_number' type='text' value={this.state.phone_number} />
            </span>
          </div>

          <div>
            <div className='formLabel'>
              Address
            </div>
            <span>
              <input onChange={this.handleChange} name='address' type='text' value={this.state.address} />
            </span>
          </div>

          <div>
            <div className='formLabel'>
              Photo
            </div>
            <span>
              <input onChange={this.handleChange} name='photo' type='text' value={this.state.photo} />
            </span>
          </div>

          <div>
            <button type='submit' className='button-container'>Update Account</button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditUserForm;
