import { any } from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';
import Authenticator from './fake-authenticator';

export default class Logout extends React.Component<any,any> {
  onLogoutRedirectUrl = '/login';

  constructor(props: any) {
    super(props);
    this.state = {
      logout: false,
    };
  }

  componentDidMount() {
    Authenticator.logout();
    this.setState({
      logout: true,
    });
  }

  render() {
    const { logout } = this.state;
    if (logout) {
      return <Redirect to={this.onLogoutRedirectUrl} />;
    }
    return null;
  }
}
