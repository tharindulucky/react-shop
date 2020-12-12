import React from 'react';
import {Container, Row, Form, Button, Col} from "react-bootstrap";


const Login = (props) => {
    return(

        <div className="container-fluid">
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default Login;
