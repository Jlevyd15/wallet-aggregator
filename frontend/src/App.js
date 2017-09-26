import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/LoginPage'
import Users from './pages/UsersPage'
import Landing from './pages/LandingPage'

import PageLayout from './pages/PageLayout'

import { isAuthenticated } from './utils/auth'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PageLayout>
            {/*<Route exact path="/" component={LANDING PAGE COMPONENT HERE} />
            
            <MatchWhenAuthorized path="/dashboard" name="Home" component={Full}/>*/}
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            {/*<MatchWhenAuthorized path="/days" component={DayForm} />*/}
            <MatchWhenAuthorized path="/getUsers" component={Users} />
          </PageLayout>
        </Switch>
      </BrowserRouter>
    );
  }
}

const MatchWhenAuthorized = ({component: Component, ...rest}) => (
  <Route {...rest} render={renderProps => (
    isAuthenticated() ? (
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
