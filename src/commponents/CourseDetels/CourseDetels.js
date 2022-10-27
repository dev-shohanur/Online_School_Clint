import React, { useContext, useRef } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaBookOpen, FaClock, FaHeadset, FaMandalorian, FaUserClock, FaUserTie, FaViadeo } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Pdf from 'react-to-pdf';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const CourseDetels = () => {
    const { usre } = useContext(AuthContext);
    const { id, courseThumbel, name, instructorName, instructorPhoto, totalClass, totalHours, detels } = useLoaderData();
    const ref = useRef();

    return (
        <Container ref={ref}>
            <Row className='my-5'>
                <Col sm={7}>
                    <div className=" shadow bg-light p-3 rounded">
                        <img className='w-100' src={courseThumbel} alt="" srcset="" />
                        <h4 className='my-3'>{name}</h4>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <p><FaBookOpen /> Class : {totalClass}</p>
                            <p><FaClock /> Hours : {totalHours}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <Pdf targetRef={ref} filename='course-details.pdf'>
                                {({ toPdf }) =>
                                    <Button className='btn-warning' onClick={toPdf}>Download pdf</Button>}
                            </Pdf>
                            <Link to={`/course/${id}/checkout`}>
                                <Button className='btn-warning'>Get premium access</Button>
                            </Link>
                            
                        </div>
                    </div>
                </Col>
                <Col sm={5} className='my-3'>
                    <div className="d-flex align-items-center">
                        <img
                            // style={{ height: '60px' }}
                            style={{ width: '90px' }}
                            className='rounded-circle me-2'
                            src={instructorPhoto} alt="" srcset="" />
                        <h5>Instructor : {instructorName}</h5>
                    </div>
                    <div className="">
                        <h4>About {name} Course :</h4>
                        <p>{detels}</p>
                    </div>
                    <div className="">
                        <Card style={{ width: '100%' }}>
                            <Card.Header>What You Get From Us?</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    1. Expert Instructor.
                                    <FaUserTie />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    2. 24/7 Customer Support.
                                    <FaHeadset />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    3. Life Time Access .
                                    <FaUserClock />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    4. Live Video Support.
                                    <FaUserTie />
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CourseDetels;