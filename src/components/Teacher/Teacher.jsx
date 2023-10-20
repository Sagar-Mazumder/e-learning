import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Rating } from '@smastrom/react-rating'
const Teacher = ({ teacherData }) => {
    const { id, teacherName, teacherRatings, description, image } = teacherData
    return (
        <div className='col col-lg-4 g-4'>
            <Card style={{ width: '18rem' }} className='border-0 shadow rounded-4 py-4 mx-auto text-center '>
                <Card.Img className='rounded-circle w-50 mx-auto' variant="top" src={image} />
                <Card.Body >
                    <Card.Title>{teacherName}</Card.Title>
                    <Card.Text>
                        <Rating className='mx-auto' style={{ maxWidth: 100 }} value={teacherRatings} readOnly />
                        <p>{description}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Teacher;