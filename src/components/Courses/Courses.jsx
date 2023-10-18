import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css'
const Courses = () => {
    const coursesData = useLoaderData();

    return (
        <div>
            <div className='course-container'>
                <h2 className='text-white '>Courses Page</h2>
            </div>
            <div className='text-center mt-5'>
                <p className='text-secondary fs-5'>Checkout New List</p>
                <h1 className='fw-bold fs-1'>Explore Courses</h1>
            </div>
            <div>
                {
                    coursesData.map(courseData => <Course
                        courseData={courseData}
                        key={courseData.courseId}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;