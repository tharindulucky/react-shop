import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStore, faBox, faRoad } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    return(
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <FontAwesomeIcon icon={faStore} size="lg" />
                </div>
                <div className="sidebar-brand-text mx-3">My Store</div>
            </a>

            <hr className="sidebar-divider my-0"/>

                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <FontAwesomeIcon icon={faHome} size="xs" />
                        <span> Dashboard</span>
                    </Link>
                </li>

            <hr className="sidebar-divider my-0"/>

            <li className="nav-item active">
                <Link className="nav-link" to="/products">
                    <FontAwesomeIcon icon={faBox} size="xs" />
                    <span> Products</span>
                </Link>
            </li>




        </ul>
    );
}

export default Sidebar;
