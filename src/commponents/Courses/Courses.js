import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import Row from 'react-bootstrap/Row';
import { Col, Container } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';


const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='w-100 overflow-hidden'>
            <Row>
                <Col sm={3} className=' shadow-lg rounded-3 bg-opacity-50 p-4' style={{ backgroundColor: '#F5F5F5'}}>
                    {
                        courses.map(course =>
                            <Link to={`/course/${course.id}`} className='text-decoration-none bg-white'>
                                <button className='text-white btn btn-warning fw-bold mb-3 w-100'>
                                    <span className='text-white'><FaCheck /> </span>
                                    {course.name }.
                                </button>
                            </Link>
                        )
                    }
                </Col>
                <Col sm={9}>
                    <Container>
                        <h2 className='text-center pt-5 pb-3 fw-bold'>Our Courses</h2>
                        <div className='row row-cols-1 row-cols-md-2 g-4'>

                            {
                                courses.map(course => <CourseCard course={course}></CourseCard>)
                            }
                        </div>
                    </Container>
                </Col>
            </Row>

        </div>
    );
};

export default Courses;