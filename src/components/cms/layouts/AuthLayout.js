import React from 'react';

import HeaderAuth from '../includes/HeaderAuth';
import Footer from '../includes/Footer';

const CmsLayout = ({children}) => {
    return(
        <div id="wrapper">
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <HeaderAuth/>
                    {children}
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default CmsLayout;
