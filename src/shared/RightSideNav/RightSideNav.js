import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaFacebook, FaGithub, FaGoogle, FaTwitch, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import app from '../../firebase/firebase.init';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightSideNav = () => {
    const { providerLogIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const handelGoogleSignIn = () => {
        providerLogIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handelGoogleSignIn} className='mb-3' variant="outline-primary"><FaGoogle /> Log In With Google</Button>
                <Button variant="outline-dark"><FaGithub /> Log In With Github</Button>
            </ButtonGroup>
            <div>
                <h4 className='my-4'>Find Us</h4>
                <ListGroup>
                    <ListGroup.Item className='mb-3'><FaFacebook /> FaceBook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaWhatsapp /> Whats App</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitter />Twitter</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;