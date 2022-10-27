import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { FaGithub, FaGithubAlt, FaGoogle } from 'react-icons/fa'
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const LogIn = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { signIn, providerLogIn, githubProviderLogIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error('error', error)
                setError(error.message);
            })
    }
    const handelGoogleSignIn = () => {
        providerLogIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }
    const handelGithubSignIn = () => {
        providerLogIn(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }
    return (
        <>
            <Container className='p-5 shadow-lg rounded-4 mt-4'>
                <h2 className='text-center fw-bold mb-4 pb-4 fs-1'>Login Information</h2>
                <Row>
                    <Col sm={6}>
                        <img className='img-fluid' src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" alt="" srcset="" />
                    </Col>
                    <Col sm={6}>
                        <Form onSubmit={handleSignIn}>
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
                                Log In
                            </Button>
                        </Form>
                        <hr />
                        <p>New Here? Create a New Account. <Link to='/register'>Register Now</Link></p>
                        <h5 className='text-center'>Or</h5>
                        <Button onClick={handelGoogleSignIn} className='w-100 mb-3' variant="outline-danger"><FaGoogle /> log In With Google</Button>
                        <Button onClick={handelGithubSignIn} className='w-100' variant="outline-dark"><FaGithub /> log In With Github</Button>
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default LogIn;