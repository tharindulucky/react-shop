import React from 'react';
import {Link} from "react-router-dom";
import {Form, Button, Col} from "react-bootstrap";


const EditProduct = (props) => {
    return(
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Edit Product</h1>
                <Link to="/products/new" className="d-none d-sm-inline-block btn btn-sm btn-danger shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Delete</Link>
            </div>

            <div className="row">
                <div className="col-xl-12">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Product Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter product title..." />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Product Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Row>
                                <Col xs={2}>
                                    <Form.Label>Product Price</Form.Label>
                                    <Form.Control type="text" placeholder="Enter product title..." />
                                </Col>

                                <Col xs={2}>
                                    <Form.Label>Product Category</Form.Label>
                                    <Form.Control as="select" custom>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Col>

                                <Col xs={2}>
                                    <Form.Label>Product Subcategory</Form.Label>
                                    <Form.Control as="select" custom>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Col>
                            </Form.Row>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default EditProduct;
