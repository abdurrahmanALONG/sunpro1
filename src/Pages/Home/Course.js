import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import './Home.css'

const Course = () => {

    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourse(data));
    }, [])

    return (
        <div>
            <div>
                <h1 className="text-6xl mt-12 mb-8">Our Courses</h1>
                <div className="courseStyle m-8">
                    {
                        course.map(course => <CourseCard
                            key={course.id}
                            course={course}
                        ></CourseCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Course;