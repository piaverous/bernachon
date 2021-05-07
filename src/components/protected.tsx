import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import cookie from '../libs/cookie/client';

export default class Protected extends React.Component<any,any> {
  redirectUrl = '/login';

  constructor(props: any) {
    super(props);
    this.state = {
      initialized: false,
      allow: false,
    };
  }

  componentDidMount() {
    // Add your custom validation
    const isLoggedIn = cookie.getItem('secretKey') === 'allowmein';

    if (!isLoggedIn) {
      this.setState({
        initialized: true,
        allow: false,
      });
    } else {
      this.setState({
        initialized: true,
        allow: true,
      });
    }
  }

  render() {
    const { initialized, allow } = this.state;
    // eslint-disable-next-line
    const { children } = this.props;
    if (!initialized) {
      return null;
    }
    if (allow) {
      return children;
    }
    return (
      <Route render={({ staticContext }: any) => {
        // eslint-disable-next-line
        if (staticContext) staticContext.status = 403;
        return <Redirect to={this.redirectUrl} />;
      }}
      />
    );
  }
}
