//Bootstrap - bootstrap-react package
//Normal HTML/CSS - regular classes and tags
//Add JSX if necessary
//Because, that's how UI developer gives you the UIs.

import React from 'react';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import CmsLayout from './components/cms/layouts/CmsLayout';
import AuthLayout from './components/cms/layouts/AuthLayout';

//Auth
import Login from './components/cms/pages/auth/Login';
import Register from './components/cms/pages/auth/Register';

//Dashboard
import Dashboard from './components/cms/pages/Dashboard';

//Products
import AllProducts from './components/cms/pages/products/AllProducts';
import CreateProduct from './components/cms/pages/products/CreateProduct';
import EditProduct from './components/cms/pages/products/EditProduct';

const name = "Buwa";

const App = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/login" render={(props) => (<AuthLayout><Login {...props} /></AuthLayout>)} />
                <Route exact path="/register" render={(props) => (<AuthLayout><Register {...props} /></AuthLayout>)} />
                <Route exact path="/" render={(props) => (<CmsLayout><Dashboard {...props} /></CmsLayout>)} />
                <Route exact path="/dashboard" render={(props) => (<CmsLayout><Dashboard {...props} /></CmsLayout>)} />

                <Route path="/products/:id/edit" render={(props) => (<CmsLayout><EditProduct {...props} /></CmsLayout>)} />
                <Route path="/products/new" render={(props) => (<CmsLayout><CreateProduct {...props} /></CmsLayout>)} />
                <Route path="/products" render={(props) => (<CmsLayout><AllProducts {...props} /></CmsLayout>)} />
            </Switch>
        </Router>
    );
}

export default App;
