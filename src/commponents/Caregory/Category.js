import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSumaryCard from '../../shared/NewsSumaryCard/NewsSumaryCard';
import News from '../News/News';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h2>Category:{categoryNews.length}</h2>
            {
                categoryNews.map(news => <NewsSumaryCard
                    key={news._id}
                    news={news}
                ></NewsSumaryCard>)
            }
        </div>
    );
};

export default Category;