import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends PureComponent<any,any> {
  constructor(props: any) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggleMenuBar(e: any) {
    const { open } = this.state;
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    this.setState({
      open: !open,
    });
  }

  closeMenuBar() {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className=" navbar-item"><strong>Bièrenachon 🐐</strong></Link>
              <button
                type="button"
                onClick={e => this.toggleMenuBar(e)}
                className={`navbar-burger ${open ? 'is-active' : ''}`}
                aria-label="menu"
                aria-expanded="false"
                style={{
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                }}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </button>
            </div>
            <div className={`navbar-menu ${open ? 'is-active' : ''}`}>
              <Link className="navbar-item" to="/home" onClick={() => this.closeMenuBar()}>
                🐐 Accueil
              </Link>
              <Link className="navbar-item" to="/dates" onClick={() => this.closeMenuBar()}>
                📆 Dates
              </Link>
              <Link className="navbar-item" to="/location" onClick={() => this.closeMenuBar()}>
                🏡 Le Lieu
              </Link>
              <Link className="navbar-item" to="/weather" onClick={() => this.closeMenuBar()}>
                🌤 Météo
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
