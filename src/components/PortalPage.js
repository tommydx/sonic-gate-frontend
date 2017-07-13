// This will be the front page users reach when logging in or signing up.
import React, { Component } from 'react';

// React Link tags replace HTML <a> tags
import { Link } from 'react-router';

class PortalPage extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="portal-wrapper">
        // CREATE AND ADD A LOGO IMAGE HERE MAYBE
        <img src={require ('../assets/img/')} className="" />
        <div className="portal-buttons">
          <Link to="/signup">
            <button className="portalbutton" type="submit">Sign Up</button>
          </Link>

          <Link to="/login">
            <button className="portalbutton" type="submit">Log In</button>
          </Link>
        </div>
      </div>
    );
  }

}
