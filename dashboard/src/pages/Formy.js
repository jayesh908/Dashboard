import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Formy() {
    return (
        <div className='container'>
            <div className='card'>
                <div className='card-header'>
                    React Form Control
                </div>
                <div className='my3'>Form Groups</div>
                <div className='card-body'>
                    <div className='row'>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div><br />

            <div className='card'>
                <div className='card-header'>
                    Horizontal Form
                </div>

                <div className='card-body'>
                    <div className='my3'>Form Groups</div>
                    <div className='row'>
                        <Form>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>
                                    Email
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="email" placeholder="Email" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>
                                    Password
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="password" placeholder="Password" />
                                </Col>
                            </Form.Group>
                            <fieldset>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label as="legend" column sm={2}>
                                        Radios
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Check
                                            type="radio"
                                            label="first radio"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios1"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="second radio"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios2"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="third radio"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios3"
                                        />
                                    </Col>
                                </Form.Group>
                            </fieldset>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Form.Check label="Remember me" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Button type="submit">Sign in</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div><br />

            <div className='card'>
                <div className='card-header'>
                    Horizontal Form label sizing
                </div>
                <div className='card-body'>
                    <div className='my3'>Form Groups</div>
                    <Row>
                        <Form.Label column="lg" lg={2}>
                            Large Text
                        </Form.Label>
                        <Col>
                            <Form.Control size="lg" type="text" placeholder="Large text" />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Form.Label column lg={2}>
                            Normal Text
                        </Form.Label>
                        <Col>
                            <Form.Control type="text" placeholder="Normal text" />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Form.Label column="sm" lg={2}>
                            Small Text
                        </Form.Label>
                        <Col>
                            <Form.Control size="sm" type="text" placeholder="Small text" />
                        </Col>
                    </Row>

                </div>
            </div><br />
        </div>
    );
}

export default Formy;