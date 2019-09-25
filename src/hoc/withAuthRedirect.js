import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getIsAuthenticated } from '../redux/sessionLogin/sessionLoginSelectors';

const withAuthRedirect = BaseComponent => {
  class WithAuthRedirect extends Component {
    static propTypes = {
      authenticated: PropTypes.bool.isRequired,
      history: PropTypes.shape({
        replace: PropTypes.func.isRequired,
      }).isRequired,
      location: PropTypes.shape({}).isRequired,
    };

    state = {
      isCdu: true,
    };

    componentDidMount() {
      const { authenticated, history } = this.props;
      if (!authenticated) return;
      history.replace('/dashboard');
    }

    componentDidUpdate() {
      const { authenticated, history, location } = this.props;
      if (!authenticated) return;
      const { isCdu } = this.state;
      if (isCdu) {
        if (location.state && location.state.from) {
          return history.replace(location.state.from);
        }

        history.replace('/dashboard');

        this.setState({
          isCdu: false,
        });
      }
    }

    componentWillUnmount() {
      this.setState({
        isCdu: true,
      });
    }

    render() {
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <BaseComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    authenticated: getIsAuthenticated(state),
  });

  return connect(mapStateToProps)(WithAuthRedirect);
};

export default withAuthRedirect;
