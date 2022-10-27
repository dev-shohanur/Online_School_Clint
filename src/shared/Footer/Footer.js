import React from 'react';
import { FaBlog, FaBookOpen, FaEmber, FaEnvelope, FaFacebook, FaHome, FaInstagram, FaLinkedinIn, FaLinode, FaLocationArrow, FaMap, FaPhone, FaPhoneAlt, FaQuestion, FaQuestionCircle, FaVoicemail, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='bg-warning py-4 mt-5 mx-0 row p-5 bg-opacity-75 w-100'>
                <div className="col-sm-6">
                    <Link to='/' className='fs-3 text-decoration-none  text-black'><FaBookOpen/> Online School</Link>
                    <p><FaLocationArrow /> Level-22, 44, Awal Centre, Banani, Dhaka</p>
                    <p><FaEnvelope/> Official: info@OnlineSchool.com</p>
                    <p><FaPhoneAlt />  Helpline : 01324127931 , 01717381384</p>
                </div>
                <div className="col-sm-3 col-6">
                    <Link className='text-black' to='/faq'><FaQuestion/> FAQ</Link><br/>
                    <Link className='text-black' to='/blog'><FaBlog/> Blog</Link><br />
                    <Link className='text-black' to='/'><FaHome/> Home</Link><br />
                    <Link className='text-black' to='/courses'><FaBookOpen/> Courses</Link><br />
                </div>
                <div className="col-sm-3 col-6">
                    <Link className='text-dark' to=''><FaFacebook/> FaceBook</Link><br/>
                    <Link className='text-dark' to=''><FaInstagram /> Instagarm</Link><br />
                    <Link className='text-dark' to=''><FaLinkedinIn /> Linkedin</Link><br />
                    <Link className='text-dark' to=''><FaYoutube /> Youtube</Link><br />
                </div>
            </div>
            <div className='bg-warning py-4'>
                <p className='text-center'>© 2022 Copyright: Online School Inc. </p>
            </div>
        </>
    );
};

export default Footer;