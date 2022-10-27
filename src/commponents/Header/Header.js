import React, { useContext, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaBlog, FaBookOpen, FaHome, FaQuestion, FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { Form } from 'react-bootstrap';
import DarkModeToggle from "react-dark-mode-toggle";


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handelLogOut = () => {
        logOut()
            .then(() => { })
            .ctch(error => console.error(error))
    }
    const [isDarkMode, setIsDarkMode] = useState(() => false);

    return (
        <Navbar collapseOnSelect className=' d-flex justify-content-between sticky-top shadow' expand="lg" bg="light" variant="">
            <Container>
                <Navbar.Brand><Link to='/' className='text-decoration-none'><FaBookOpen/> Online School</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/"> <FaHome /> Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/courses"><FaBookOpen /> Courses</Nav.Link>
                        <Nav.Link as={NavLink} to="/blog"><FaBlog /> Blog</Nav.Link>
                        <Nav.Link as={NavLink} to="/faq"><FaQuestion /> FAQ</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            {
                                user?.uid ?
                                    <>
                                        {
                                            user?.photoURL ?
                                                <Image
                                                    className='mx-2'
                                                    data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                    title={user?.displayName}
                                                    roundedCircle
                                                    src={user?.photoURL}
                                                    style={{ height: '30px' }}
                                                >
                                                </Image>
                                                :
                                                <FaUserAlt></FaUserAlt>
                                        }

                                        {user?.displayName}
                                        < button className='btn btn-danger mx-2' onClick={handelLogOut}>Log Out <FaSignOutAlt /></button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login' className='me-2'>
                                            <button className='btn btn-danger'>Log In</button>
                                        </Link>
                                        <Link to='/register'>
                                            <button className='btn btn-danger'>Register </button>
                                        </Link>
                                    </>
                            }
                        </Nav.Link>
                        <Nav.Link>
                            <DarkModeToggle
                                onChange={setIsDarkMode}
                                checked={isDarkMode}
                                size={80}
                            />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;