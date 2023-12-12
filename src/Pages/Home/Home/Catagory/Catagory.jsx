import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../NewsCard/NewsCard';

const Catagory = () => {
    const catagoryNews = useLoaderData()
    // console.log(catagoryNews)
    return (
        <div>
            {/* <h2>This is catagory: {catagoryNews.length}</h2> */}
            {
                catagoryNews.map(news => <NewsCard 
                 key={news._id}
                 news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Catagory;