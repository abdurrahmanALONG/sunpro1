import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { id, name, img, details, price } = course;

    const navigate = useNavigate();

    const navigateToCourseDetail = id => {
        navigate(`/courses/${id}`)
    }


    return (
        <div>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <h2 class="card-title">Price:{price}</h2>
                    <p>{details}</p>
                    <div class="card-actions justify-end">
                        <div className='servicebtn'>
                        <button onClick={() => navigateToCourseDetail(id)} className="btn btn-active"> Buy Now </button>
                            {/* <button onClick={() => navigateToCourseDetail(id)}  type="submit">
                                Buy Now
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;