import React from "react";
import Button from 'react-bootstrap/Button';

const Buttons = () => {
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        Buttons
                    </div>
                    <div className="card-body">
                        <div>CoreUI includes a bunch of predefined buttons components, each serving its own semantic purpose. Buttons show what action will happen when the user clicks or touches<br />
                            CoreUI buttons are used to initialize operations, both in the background or foreground of an experience.</div><br />
                        <Button variant="primary">Primary</Button>{' '}
                        <Button variant="secondary">Secondary</Button>{' '}
                        <Button variant="success">Success</Button>{' '}
                        <Button variant="warning">Warning</Button>{' '}
                        <Button variant="danger">Danger</Button>{' '}
                        <Button variant="info">Info</Button>{' '}
                        <Button variant="light">Light</Button>{' '}
                        <Button variant="dark">Dark</Button>
                        <Button variant="link">Link</Button>
                    </div>
                </div><br />

                <div className="card">
                    <div className="card-header">
                        Outline-buttons
                    </div>
                    <div className="card-body">
                        <div className="my-4">or a lighter touch, Buttons also come in outline-* variants with no background color.</div>
                        <Button variant="outline-primary">Primary</Button>{' '}
                        <Button variant="outline-secondary">Secondary</Button>{' '}
                        <Button variant="outline-success">Success</Button>{' '}
                        <Button variant="outline-warning">Warning</Button>{' '}
                        <Button variant="outline-danger">Danger</Button>{' '}
                        <Button variant="outline-info">Info</Button>{' '}
                        <Button variant="outline-light">Light</Button>{' '}
                        <Button variant="outline-dark">Dark</Button>
                    </div>
                </div><br />

                <div className="card">
                    <div className="card-header">
                        Buttons Tags
                    </div>
                    <div className="card-body">
                        <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
                        <Button as="input" type="button" value="Input" />{' '}
                        <Button as="input" type="submit" value="Submit" />{' '}
                        <Button as="input" type="reset" value="Reset" />
                    </div>
                </div><br />

                <div className="card">
                    <div className="card-header">
                        Sizes
                    </div>
                    <div className="card-body">
                        <div className="mb-2">
                            <Button variant="primary" size="lg">
                                Large button
                            </Button>{' '}
                            <Button variant="secondary" size="lg">
                                Large button
                            </Button>
                        </div>
                        <div>
                            <Button variant="primary" size="sm">
                                Small button
                            </Button>{' '}
                            <Button variant="secondary" size="sm">
                                Small button
                            </Button>
                        </div>
                    </div>
                </div><br />

                <div className="card">
                    <div className="card-header">
                        Active State
                    </div>
                    <div className="card-body">
                        <Button variant="primary" size="lg" active>
                            Primary button
                        </Button>{' '}
                        <Button variant="secondary" size="lg" active>
                            Button
                        </Button>
                    </div>
                </div><br />

                <div className="card"> 
                    <div className="card-header">
                       Disabled State
                    </div>
                    <div className="card-body">
                        <Button variant="primary" size="lg" disabled>
                            Primary button
                        </Button>{' '}
                        <Button variant="secondary" size="lg" disabled>
                            Button
                        </Button>{' '}
                        <Button href="#" variant="secondary" size="lg" disabled>
                            Link
                        </Button>
                    </div>
                </div><br />
            </div>
        </>

    )
}
export default Buttons