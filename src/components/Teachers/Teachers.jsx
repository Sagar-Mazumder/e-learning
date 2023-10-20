import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Teachers.css'
import Teacher from '../Teacher/Teacher';
const Teachers = () => {
    const teachersData = useLoaderData();
    console.log(teachersData);
    return (
        <div>
            <div className='course-container'>
                <h2 className='text-white fw-bold fs-1'>Teachers</h2>
            </div>
            <div className='text-center mt-5'>
                <p className='text-secondary fs-5'>Skilled & Qualified</p>
                <h1 className='fw-bold fs-1'>Meet the Teachers</h1>
            </div>
            <div className='row mx-0'>
                {
                    teachersData.map(teacherData => <Teacher
                        teacherData={teacherData}
                        key={teacherData.id}
                    ></Teacher>)
                }
            </div>
        </div>
    );
};

export default Teachers;