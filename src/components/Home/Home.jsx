import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ladyTeacher from '../../images/Teacher-2.png';
import gentsTeacher from '../../images/Teacher-1.png';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { faChalkboardUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Home.css';
const Home = () => {
    return (
        <>
            {/* carousel section  */}
            <Container>
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <div className="d-flex justify-content-around align-items-center">
                            <div className="carousel-text">
                                <h1>Learn new <br /> things daily</h1>
                                <p>Get access to 6800+ courses from <br /> 680 professional teachers</p>
                                <Button className='' variant="dark">DISCOVER MORE</Button>
                            </div>
                            <div className="carousel-image">
                                <img
                                    className="d-block w-100"
                                    src={ladyTeacher}
                                    alt="First slide"
                                />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-flex justify-content-around align-items-center">
                            <div className="carousel-text">
                                <h1>WE CAN<br />TEACH YOU</h1>
                                <p>Get access to 6800+ courses from <br /> 680 professional teachers</p>
                                <Button className='' variant="dark">DISCOVER MORE</Button>
                            </div>
                            <div className="carousel-image">
                                <img
                                    className="d-block w-100"
                                    src={gentsTeacher}
                                    alt="First slide"
                                />
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </Container>

            {/* middle section  */}
            <section >
                <div className='d-flex justify-content-around align-items-center'>
                    <Button variant="outline-secondary">
                       <div className='d-flex'>
                       <div>
                            <FontAwesomeIcon icon={faChalkboardUser} />
                        </div>
                        <div>
                            <h1 className=''>Learn skills </h1>
                            <p>with ultimate course</p>
                        </div>
                       </div>
                    </Button>
                    <Button variant="outline-secondary">Expert Teacher</Button>
                    <Button variant="outline-secondary">Contact</Button>
                </div>
            </section>
        </>
    );
};

export default Home;