import React from 'react';
import './About.css'
import aboutImage1 from '../../../images/std-image.jpg';
import aboutImage2 from '../../../images/std-image 2.jpg';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
const About = () => {

    return (
        <>
            <div className='row mx-0 mt-5'>
                <div className='col-lg-6 col-12'>
                    <img className='image-zoom rounded-4 ms-3'
                        src={aboutImage1}
                    />
                    <img className='image-zoom rounded-4 ms-4'
                        src={aboutImage2}
                    />
                </div>
                <div className='col-lg-6 col-12 mt-4 mt-lg-0'>
                    <h6 className='text-secondary'>About e-learning company</h6>
                    <h1 className='fw-bold mt-3 mb-4'>
                        Welcome to the Online <br /> Learning Center
                    </h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, simply free text by injected humour.</p>
                    <p className='mt-4'><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#000000", }} /> Get unlimited access to 66000+ of our top courses
                    </p>
                    <p><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#000000", }} /> Explore a variety of fresh educational topics
                    </p>
                    <p><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#000000", }} /> Find the best qualitfied teacher for you
                    </p>
                    <p><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#000000", }} /> Transform access to education
                    </p>
                    <Button className='courses-btn' variant="dark">VIEW ALL COURSES</Button>
                </div>

            </div>


        </>
    );
};

export default About;