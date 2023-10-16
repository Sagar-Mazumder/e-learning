import React from 'react';
import './FunFact.css';
import teacher from '../../../images/fun-fact/teacher.png';
import video from '../../../images/fun-fact/play-button.png';
import reading from '../../../images/fun-fact/reading-book.png';
const FunFact = () => {
    return (
        <>
            <div className="fun-fact-container d-lg-flex  justify-content-center align-items-center gap-5 p-4 p-lg-0">

                <div>
                    <h6 className='text-secondary'>Fun fact</h6>
                    <h1 className='text-white fw-bold'>E-Learning Mission is to <br /> Polish your skill</h1>
                    <p className='text-secondary'>There are many variations of passages of lore <br /> ipsum available but the majority have suffered.</p>
                </div>
                <div className='text-center border rounded-4 bg-white px-3 py-1 my-2 my-lg-0' >
                    <img src={teacher} alt="" />
                    <h2 >6800</h2>
                    <p >Pro Teacher</p>
                </div>
                <div className='text-center border rounded-4 bg-white px-3 py-1 my-2 my-lg-0'>
                    <img src={video} alt="" />
                    <h2 >9800</h2>
                    <p >Skill Courses</p>
                </div>
                <div className='text-center border rounded-4 bg-white px-2 py-1 my-2 my-lg-0'>
                    <img src={reading} alt="" />
                    <h2 >8800</h2>
                    <p >Students Enrolled</p>
                </div>
            </div>

        </>
    );
};

export default FunFact;