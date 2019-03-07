import React from 'react';
import Wrapper from './Wrapper';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import { faLockOpen } from '@fortawesome/free-solid-svg-icons'
import { faPeopleCarry } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faAnchor } from '@fortawesome/free-solid-svg-icons'


class Sidebar extends React.Component {

    render() {
      return (
        <Wrapper className="col-12 col-md-2 p-0 bg-dark">
          <nav className="navbar navbar-expand navbar-dark bg-dark flex-md-column flex-row align-items-start py-2">
            <div className="collapse navbar-collapse">
              <ul className="flex-md-column flex-row navbar-nav w-100 justify-content-between">
                <li className="nav-item">
                  <Link className="nav-link pl-0 text-nowrap" to="/"><FontAwesomeIcon icon={faTachometerAlt} /> Dahsboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-0" to="/datasets"><FontAwesomeIcon icon={faLockOpen} />  Datasets</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-0" to="/groups"><FontAwesomeIcon icon={faPeopleCarry} />  Groups</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-0" to="/add"><FontAwesomeIcon icon={faPlusCircle} />  Add Data</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link pl-0" href="#"><FontAwesomeIcon icon={faAnchor} />  Harvests</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pl-0" href="#"><FontAwesomeIcon icon={faLockOpen} />  Settings</a>
                </li>
              </ul>
            </div>
          </nav>
        </Wrapper>
      );
    }
}

export default Sidebar;
