import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return(
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <FontAwesomeIcon icon={faSearch} size="xs" />
            </button>

            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                           aria-label="Search" aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                                <FontAwesomeIcon icon={faSearch} size="xs" />
                            </button>
                        </div>
                </div>
            </form>

            <ul className="navbar-nav ml-auto">

                <li className="nav-item dropdown no-arrow mx-1">
                    <Link className="nav-link dropdown-toggle" to="/login" id="alertsDropdown" role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Logout
                    </Link>
                </li>
            </ul>



        </nav>
    );
}

export default Header;
