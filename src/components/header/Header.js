import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Movie App
        </a>
        <button className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                className={(navData) =>
                  'nav-link ' + (navData.isActive ? 'active' : '')
                }
                to="/movies"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={(navData) =>
                  'nav-link ' + (navData.isActive ? 'active' : '')
                }
                to="/favorites"
              >
                Favorites
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
