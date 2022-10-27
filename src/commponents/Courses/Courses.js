import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import Row from 'react-bootstrap/Row';
import { Col, Container } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';


const Courses = () => {
    const courses = useLoaderData();
    return (
        <div>
            <Row>
                <Col sm={3} className='bg-warning p-4 bg-opacity-75'>
                    {
                        courses.map(course =>
                            <Link to={`/course/${course.id}`} className='text-decoration-none bg-white'>
                                <h5 className='text-black'>
                                    <span className='text-success'><FaCheck /> </span>
                                    {course.name}
                                </h5>
                            </Link>
                        )
                    }
                </Col>
                <Col sm={9}>
                    <Container>
                        <h2 className='text-center pb-5'>Our Courses</h2>
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