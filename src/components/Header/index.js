import React from 'react';
import logo from '../../assets/images/logo.svg';
import Wrapper from './Wrapper';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    render() {
      return (
        <Wrapper role="banner">
          <nav className="navbar navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
              <img className="logo" alt="logo" src={logo}/>
            </Link>
            <span className="navbar-text">
              <a href="#">Sign out</a>
            </span>
          </nav>
        </Wrapper>
      );
    }
}

export default Header;
