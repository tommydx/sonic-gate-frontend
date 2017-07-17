// Set up your application entry point here...
// Require React framework.
import React from 'react';

// Require the package to render the virtual Dom to real DOM.
import { render } from 'react-dom';

// Configure the router.
import { Route, Router, browserHistory } from 'react-router';

// Application assets like CSS will go here with import path
// import './assets/css/normalize.css';
import './assets/css/style.css';

// Import components here.
import PortalPage from './components/PortalPage';

 // ** These components are NOT created yet.
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
// import DashboardUser from './components/DashboardUser';
// import DashboardGear from './components/DashboardGear';
// import NewUser from './components/NewUser';
// import NewGear from './components/NewGear';
// import EditUser from './components/EditUser';
// import EditGear from './components/EditGear';

// Restrict routes to logged in users only
// const restrict = () => {
//    if (!window.localStorage.getItem('token')) {
//        browserHistory.push('/login');
//    }
// }

// IMPERATIVE TO GET HELP WITH THESE ROUTES !!!!!!!!!
ReactDom.render(
  <Router history={browserHistory}>
    <Route path='/' component={PortalPage} />
    <Route path='/signup' component={SignUp} />
    <Route path='/login' component={LogIn} />
    <Route path='/gear/:user_id' component={DashGearSort} onEnter={restrict} />
    <Route path='/user/:user_id/edit' component={EditUser} onEnter={restrict} />
    <Route path='/user/:user_id/gear/:id/edit' component={EditGear} onEnter={restrict} />
    <Route path='/user/:user_id/gear/new' component={NewGear} onEnter={restrict} />

  </Router>
, document.getElementById('app'));
