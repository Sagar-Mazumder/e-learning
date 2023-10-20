import React from 'react';
import './News.css'
import AllNews from '../AllNews/AllNews';
import { useEffect, useState } from 'react';
const News = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        const url = "newsApi.json";
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setNews(json)
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            <div className='course-container'>
                <h2 className='text-white fw-bold fs-1'>News</h2>
            </div>
            <div className='row justify-content-center mx-0 mt-5'>
                {
                    news.map(newses => (<AllNews
                        newses={newses}
                        key={newses.id}
                    >
                    </AllNews>))
                }
            </div>
        </div>
    );
};

export default News;