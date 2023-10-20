import React from 'react';
import Card from 'react-bootstrap/Card';


const HomeNews = ({ newses }) => {
    const { id, blogName, blogImage, details } = newses
    return (
        <div className='col-12 col-lg-3 g-4'>
            <Card style={{ width: '18rem' }} className='border-0 shadow rounded-4 mx-auto h-100 w-100'>
                <Card.Img variant="top" src={blogImage} />
                <Card.Body >
                    <Card.Title>
                        <a className='text-black' style={{ textDecoration:'none', }} href="">{blogName}</a>
                    </Card.Title>
                    <Card.Text>
                        <p>{details.slice(0, 200)}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default HomeNews;