import React from 'react';
import Banner from './Banner'
import Course from './Course';
import Footer from './Footer';
import Blogs from '../Blogs'
import Contact from '../Contact';

const Home = () => {
    return (
        <div>
            <div className="gap-y-5">
                <Banner></Banner>
            </div>
            <div className="gap-y-5">
                <Course></Course>
            </div>
            <div className="gap-y-5">
                <Blogs></Blogs>
            </div>
            <div className="gap-y-5">
                <Contact></Contact>
            </div>
            <div className="gap-y-5">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;