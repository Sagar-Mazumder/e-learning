import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons'
import featurePost1 from '../../images/feature-post.jpg'
import featurePost2 from '../../images/feature-post2.jpg'
const Footer = () => {
    return (
        <>
            <div className='row bg-container mx-0 mt-5 justify-content-center py-5'>
                <div className="col-lg-2">

                    <h5 className='text-white mb-3'>Contact</h5>
                    <div className='d-flex align-items-center'>
                        <div className='me-3'>
                            <FontAwesomeIcon icon={faPhone} style={{ color: "#FFD45F", fontSize: 35 }} />
                        </div>
                        <div>
                            <p className='text-secondary'>
                                Call Anytime
                            </p>
                            <p className='text-white'>
                                01656655656565651651
                            </p>
                        </div>
                    </div>

                    <hr />

                    <div className='d-flex align-items-center'>
                        <div className='me-3'>
                            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#FFD45F", fontSize: 35 }} />
                        </div>
                        <div>
                            <p className='text-secondary'>
                                Send Email
                            </p>
                            <p className='text-white'>
                                contact@example.com
                            </p>
                        </div>
                    </div>

                    <hr />

                    <div className='d-flex align-items-center'>
                        <div className='me-3'>
                            <FontAwesomeIcon icon={faLocationDot} style={{ color: "#FFD45F", fontSize: 35 }} />
                        </div>
                        <div>
                            <p className='text-secondary'>
                                Visit Office
                            </p>
                            <p className='text-white'>
                                Agrabad, Chattogram
                            </p>
                        </div>
                    </div>

                </div>
                <div className="col-lg-2 ms-lg-5">
                    <h5 className='text-white mb-3'>Links</h5>
                    <p className='text-secondary'>About</p>
                    <p className='text-secondary'>Overview</p>
                    <p className='text-secondary'>Teachers</p>
                    <p className='text-secondary'>Join Us</p>
                    <p className='text-secondary'>Our News</p>
                </div>
                <div className="col-lg-2">
                    <h5 className='text-white mb-3'>Courses</h5>
                    <p className='text-secondary'> UI/UX Design</p>
                    <p className='text-secondary'>WordPress Development</p>
                    <p className='text-secondary'> Business Strategy</p>
                    <p className='text-secondary'>Software Development</p>
                    <p className='text-secondary'>Business English</p>
                </div>
                <div className="col-lg-2">
                    <h5 className='text-white mb-3'>Featured Posts</h5>
                    <div className='d-flex justify-content-center align-items-center gap-2'>
                        <div>
                            <img className='rounded-4' src={featurePost1} alt="" />
                        </div>
                        <div>
                            <p className='text-secondary mb-0'><FontAwesomeIcon icon={faClock} style={{ color: "#FFD45F" }} /> 8,Dec,2000</p>
                            <a className='text-white mt-0' href="">SQL Certifications for Your Data Career</a>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center align-items-center gap-2 mt-3'>
                        <div>
                            <img className='rounded-4' src={featurePost2} alt="" />
                        </div>
                        <div>
                            <p className='text-secondary mb-0'> <FontAwesomeIcon icon={faClock} style={{ color: "#FFD45F" }} /> 8,Dec,2000</p>
                            <a className='text-white  mt-0' href="">Entry Level Networking Certification</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;