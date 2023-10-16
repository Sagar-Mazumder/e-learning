import React, { useEffect, useState } from 'react';
import HomeCourse from './HomeCourse';
const HomeCourses = () => {
    const [course, setCourse] = useState([]);
    useEffect(() => {
        const url = "coursesApi.json";
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                const data = json.slice(0, 6);
                setCourse(data)
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className='row mx-0'>
            {
                course.map(courses => (<HomeCourse
                    courses={courses}
                    key={courses.courseId}
                >
                </HomeCourse>))
            }
        </div>
    );
};

export default HomeCourses;