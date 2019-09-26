/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getIsAuthenticated } from '../../redux/sessionLogin/sessionLoginSelectors';

const ProtectedRoute = ({
  autheticated,
  component: Component,
  redirectTo,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        autheticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: redirectTo,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

ProtectedRoute.propTypes = {
  autheticated: PropTypes.bool.isRequired,
  component: PropTypes.shape({
    type: PropTypes.func.isRequired,
  }).isRequired,
  redirectTo: PropTypes.string.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.string,
    }),
  }),
};

ProtectedRoute.defaultProps = {
  location: {},
};

const mapStateToProps = state => ({
  autheticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(ProtectedRoute);
