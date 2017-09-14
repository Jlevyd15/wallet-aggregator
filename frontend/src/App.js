import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/LoginPage'
import Users from './pages/UsersPage'

import { isAuthenticated } from './utils/auth'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/*<Route exact path="/" component={LANDING PAGE COMPONENT HERE} />
          
          <MatchWhenAuthorized path="/dashboard" name="Home" component={Full}/>*/}
          <Route exact path="/login" component={Login} />
          {/*<MatchWhenAuthorized path="/days" component={DayForm} />*/}
          <MatchWhenAuthorized path="/getUsers" component={Users} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const MatchWhenAuthorized = ({component: Component, ...rest}) => (
  <Route {...rest} render={renderProps => (
    isAuthenticated(true) ? (
      <Component {...renderProps} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: {from: renderProps.location}
      }} />
    )
  )}/>
)

export default App;
