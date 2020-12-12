import React from 'react';

import Sidebar from '../includes/Sidebar';
import Header from '../includes/Header';
import Footer from '../includes/Footer';

const CmsLayout = ({children}) => {
    return(
        <div id="wrapper">
            <Sidebar/>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Header/>
                    {children}
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default CmsLayout;
