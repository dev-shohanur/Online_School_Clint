import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Premium = () => {
    const { name} = useLoaderData();
    const { user } = useContext(AuthContext);
    return (
        <div className='text-center'>
            <h3>Dear <span className='text-warning'>{user.displayName}</span></h3>
            <h4>With The Email Address of <span className='text-primary'>{user.email}</span></h4>
            <h5 className='text-success'>You Successfully Purchased <span className="text-danger">{name}</span> course</h5>

            <h2>Thank You For Purchasing The <span className="text-danger">{name}</span> Course</h2>

            <img src="https://i.pinimg.com/originals/ca/38/3c/ca383c3d1c3ac6809a86c759b576e6f3.gif" alt="" srcset="" />
        </div>
    );
};

export default Premium;