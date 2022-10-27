import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-sm-6">
                    <img className='w-100 shadow' src="https://tech-guru-a37d0.web.app/static/media/sidepic.67b6ffad9df9221179ea.png" alt="" />
                </div>
                <div className="col-sm-6 d-flex align-items-center">
                    <div className="">
                        <h2 className='fs-1'>Looking For The Best Online Courses In The Country?</h2>
                        <h3 className='text-warning my-3'>The Search Is Over. Here We Are.</h3>
                        <Link to='/courses'><button className='btn btn-danger'>Our Courses</button></Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;