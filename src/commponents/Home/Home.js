import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <div className="bg-black">

                    <img
                        className="d-block w-100 opacity-50"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg1yUDQ8MMjdqzMj4SAfiN_EQpVGkWHnUpTwv86MbMUCkhxOjK66YA0lk-v-o7pJ-dbO0&usqp=CAU"
                        alt="First slide"
                    />
                </div>
                <Carousel.Caption>
                    <h2 className='fw-bold'>Online School</h2>
                    <p>Equally ready online school for quality courses and best Support.</p>
                    <Link to='/courses'>
                        <button className='btn  btn-outline-light fw-bold'>All Courses</button>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="bg-black">

                    <img
                        className="d-block w-100 opacity-50"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg1yUDQ8MMjdqzMj4SAfiN_EQpVGkWHnUpTwv86MbMUCkhxOjK66YA0lk-v-o7pJ-dbO0&usqp=CAU"
                        alt="First slide"
                    />
                </div>
                <Carousel.Caption>
                    <h2 className='fw-bold'>Online School</h2>
                    <p>Equally ready online school for quality courses and best Support.</p>
                    <Link to='/courses'>
                        <button className='btn  btn-outline-light fw-bold'>All Courses</button>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="bg-black">

                    <img
                        className="d-block w-100 opacity-50"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg1yUDQ8MMjdqzMj4SAfiN_EQpVGkWHnUpTwv86MbMUCkhxOjK66YA0lk-v-o7pJ-dbO0&usqp=CAU"
                        alt="First slide"
                    />
                </div>
                <Carousel.Caption>
                    <h2 className='fw-bold'>Online School</h2>
                    <p>Equally ready online school for quality courses and best Support.</p>
                    <Link to='/courses'>
                        <button className='btn  btn-outline-light fw-bold'>All Courses</button>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
};

export default Home;