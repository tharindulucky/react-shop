import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore} from '@fortawesome/free-solid-svg-icons'


const HeaderAuth = () => {
    return(
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <Link className="navbar-nav sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div className="sidebar-brand-icon rotate-n-15">
                    <FontAwesomeIcon icon={faStore} size="lg" />
                </div>
                <div className="sidebar-brand-text mx-3">My Store</div>
            </Link>

        </nav>
    );
}

export default HeaderAuth;
