import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginPage from '../pages/LoginPage/LoginPage';
import DashboardContainer from '../pages/DashboardPage/DashboardContainer';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import { refresh } from '../redux/sessionLogin/sessionLoginOperations';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

class App extends Component {
  static propTypes = {
    refresh: PropTypes.func.isRequired,
  };

  state = {};

  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { refresh } = this.props;
    refresh();
  }

  render() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <ProtectedRoute
            path="/dashboard"
            component={DashboardContainer}
            redirectTo="/"
          />
          <Route path="/contacts" component={ContactsPage} />
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = {
  refresh,
};

export default connect(
  null,
  mapDispatchToProps,
)(App);
