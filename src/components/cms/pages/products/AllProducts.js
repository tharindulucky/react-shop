import React from 'react';
import {ListGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const AllProducts = (props) => {
    return(
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">All Products</h1>
                <Link to="/products/new" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Add new</Link>
            </div>

            <div className="row">
                <div className="col-xl-12">
                    <ListGroup>
                        <ListGroup.Item><Link className="nav-link" to="/products/1/edit">Cras justo odio</Link></ListGroup.Item>
                        <ListGroup.Item><Link className="nav-link" to="/products/2/edit">Dapibus ac facilisis in</Link></ListGroup.Item>
                        <ListGroup.Item><Link className="nav-link" to="/products/3/edit">Morbi leo risus</Link></ListGroup.Item>
                        <ListGroup.Item><Link className="nav-link" to="/products/4/edit">Porta ac consectetur ac</Link></ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        </div>
    );
}

export default AllProducts;
