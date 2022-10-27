import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categorys, setCategorys] = useState([]);
    useEffect(() => {
        fetch('https://hero-news-server.vercel.app/news-categorys')
            .then(res => res.json())
            .then(data => setCategorys(data))
    },[])
    return (
        <div>
            <h4>All Categorys</h4>
            <div>
                {
                    categorys.map(category => <p key={category.id}>

                        <Link
                            to={`/category/${category.id}`}>
                            {category.name}
                        </Link>
                    </p>
                    )
                }
            </div>
        </div>
    );
};

export default LeftSideNav;