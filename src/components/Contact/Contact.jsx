import React from 'react';
import './Contact.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const Contact = () => {
    return (
        <div>
            <div className='course-container'>
                <h2 className='text-white fw-bold fs-1'>Contact</h2>
            </div>
            <div className='row justify-content-center align-items-center mt-5 mx-0 gap-4'>
                <div className='col-12 col-lg-3 mx-lg-0 mx-0'>
                    <p className='text-secondary fs-5'>
                        Send a Message
                    </p>
                    <h1 className='fw-bold fs-1'>
                        We Always
                        Ready To Hear
                        From You
                    </h1>
                </div>
                <div className='col-12 col-lg-6'>
                    <Form>
                        <Row className="mb-3 mx-0">
                            <Form.Group as={Col} controlId="formGridEmail">

                                <Form.Control placeholder="Your Name" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">

                                <Form.Control type="email" placeholder="Email Address" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3 mx-0">
                            <Form.Group as={Col} controlId="formGridEmail">

                                <Form.Label>This field is required</Form.Label>
                                <Form.Control placeholder="Phone Number" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>This field is required</Form.Label>
                                <Form.Control  placeholder="Subject" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3 mx-0">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                
                                <Form.Control  as="textarea" rows={3} placeholder="Write Message" />
                            </Form.Group>
                        </Row>
                        <Button className='ms-3 px-5 py-3' variant="dark" type="submit">
                            Submit Comment
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Contact;