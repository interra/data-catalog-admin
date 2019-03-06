import React from 'react';
import logo from '../../assets/images/logo.svg';
import Wrapper from './Wrapper';

class Header extends React.Component {

    render() {
      return (
        <Wrapper role="banner">
					<nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
              <img className="logo" alt="logo" src={logo}/>
            </a>
            <span className="navbar-text">
              <a href="#">Sign out</a>
            </span>
          </nav>
        </Wrapper>
      );
    }
}

export default Header;
