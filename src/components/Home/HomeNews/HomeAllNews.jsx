import React from 'react';
import { useEffect, useState } from 'react';
import HomeNews from './HomeNews';

const HomeAllNews = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        const url = "newsApi.json";
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                const data = json.slice(0, 3);
                setNews(data)
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className='row justify-content-center mx-0'>
            {
                news.map(newses => (<HomeNews
                    newses={newses}
                    key={newses.id}
                >
                </HomeNews>))
            }
        </div>
    );
};

export default HomeAllNews;