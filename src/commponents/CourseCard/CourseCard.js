import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { FaBook, FaBookOpen, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './CourseCard.css';

const CourseCard = (props) => {
    const { id, name, totalClass, totalHours, courseThumbel, instructorName } = props.course;
    return (

        <Col>
            <Card className='card'>
                <Card.Img variant="top" src={courseThumbel} />
                <Card.Body className='p-0'>
                    <div className="px-3 py-2">
                        <Card.Title>{name}</Card.Title>
                        <p>{`Instructor : ${instructorName}` }</p>
                        <Card.Text className='d-flex justify-content-between align-items-center'>
                            <p><FaBookOpen /> Class: {totalClass}</p>
                            <p><FaClock /> Hours: {totalHours}</p>
                        </Card.Text>
                    </div>
                    <Link to={`/course/${id}`} ><Button variant="warning" className='w-100 text-white text-decoration-none fw-bold'>ENROOL NOW</Button></Link>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default CourseCard;