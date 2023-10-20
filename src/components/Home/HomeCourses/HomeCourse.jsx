import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const HomeCourse = ({ courses }) => {
    const { courseName, courseRatings, coursePrice, courseImage, details } = courses;
    return (
        <div className='col col-lg-4 g-4'>
            <Card style={{ width: '18rem' }} className='border-0 shadow rounded-4 px-2 pt-2 mx-auto'>
                <Card.Img variant="top" src={courseImage} />
                <Card.Body >
                    <Card.Title>{courseName}</Card.Title>
                    <Card.Text>
                        <Rating style={{ maxWidth: 100 }} value={courseRatings} readOnly />
                        <h6>$ {coursePrice}</h6>
                    </Card.Text>
                    <Button className='w-100' variant="dark">Get Enrolled</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default HomeCourse;