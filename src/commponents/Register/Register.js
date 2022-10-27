import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { createUser, updateUserPrifile, providerLogIn, githubProviderLogIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const handelGoogleSignIn = () => {
        providerLogIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    const handelGithubSignIn = () => {
        providerLogIn(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    const handelSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate('/');
                handelUpdateUserProfile(name, photoURL)
            })
            .catch(error => setError(error.message))
    }
    const handelUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserPrifile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <>
            <Container className='p-5 shadow-lg rounded-4 mt-4'>
                <h2 className='text-center fw-bold my-4'>Registration Form</h2>
                <Row>
                    <Col sm={6}>

                        <Form onSubmit={handelSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your Name" name='name' required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>photoURL</Form.Label>
                                <Form.Control type="url" placeholder="Enter Your photoURL" name='photoURL' required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name='email' required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name='password' required />
                            </Form.Group>
                            <Form.Text className='text-danger'>
                                {error}
                            </Form.Text>
                            <br />
                            <Button className='w-100' variant="warning" type="submit">
                                Submit
                            </Button>
                        </Form>
                        <hr />
                        <p>Already have an Account?<Link to='/login'> Login here</Link></p>
                        <h5 className='text-center'>Or</h5>
                        <Button onClick={handelGoogleSignIn} className='w-100 mb-3' variant="outline-danger"><FaGoogle /> log In With Google</Button>
                        <Button onClick={handelGithubSignIn} className='w-100' variant="outline-dark"><FaGithub /> log In With Github</Button>
                    </Col>
                    <Col sm={6} className='d-flex align-items-center'>
                        <img className='w-100' src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" alt="" srcset="" />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Register;