import React from 'react';
import './Pages.css';
import about1 from '../../images/about/image-10.jpg';
import about2 from '../../images/about/image-9.jpg';
import { Button } from 'react-bootstrap';
const Pages = () => {
    return (
        <div>
            <div className='course-container'>
                <h2 className='text-white fw-bold fs-1'>About</h2>
            </div>
            {/* image section  */}
            <div className='d-lg-flex d-flex flex-lg-row flex-column justify-content-center align-items-center image-container gap-5 mt-5'>
                <img className='rounded-3' src={about1} alt="" />
                <img className='rounded-3' src={about2} alt="" />
            </div>
            {/* comment section  */}
            <div className='d-lg-flex flex-lg-row justify-content-center align-items-center gap-5 mt-5'>
                <div className='mx-4 mx-lg-0'>
                    <p className='text-secondary fs-5'>About Company</p>
                    <h1 className='fw-bold fs-1'>The Best Global Experts</h1>
                </div>
                <div className='mx-4 mx-lg-0'>
                    <p className='text-secondary'>There are many variations of passages of lorem ipsum available, but the majority have suffered <br /> alteration in some form, by injected humour words which don’t look even slightly believable. Lorem <br /> Ipsn gravida nibh vel velit auctor aliquetn auci elit cons.</p>
                    <Button className='px-5 py-3 mt-4' variant="dark">
                        DISCOVER MORE
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Pages;