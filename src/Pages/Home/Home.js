import React from 'react';
import Banner from './Banner'
import Course from './Course';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <div className="gap-y-5">
                <Banner></Banner>
            </div>
            <div className="gap-y-5">
                <Course></Course>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;