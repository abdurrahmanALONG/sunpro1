import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CourseDetails = () => {
    const { courseId } = useParams();
    return (
        <div className='container my-5 py-5'>
            <h1>Welcome to service details:{courseId}</h1>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default CourseDetails;