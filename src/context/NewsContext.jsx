import React, { createContext, useState, useEffect } from 'react';
import { NewsData } from '../static/NewsData';

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
    const [articles, setArticles] = useState([]);
    const initialLiked = JSON.parse(window.localStorage.getItem('likedArticles')) || [];
    const [liked, setLiked] = useState(initialLiked);

    useEffect(() => {
        // axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
        //     .then(response => setArticles(response.data.articles))
        //     .catch(error => console.error('Error fetching news:', error));

        setArticles(NewsData);
    }, []);

    const toggleLike = (id) => {
        setLiked((prevLiked) => {
            if (prevLiked.includes(id)) {
                return prevLiked.filter((element) => element !== id);
            } else {
                return [...prevLiked, id];
            }
        });
        
    };

    useEffect(() => {
        localStorage.setItem('likedArticles', JSON.stringify(liked));
    }, [liked]);
    
    return (
        <NewsContext.Provider value={{ articles, liked, toggleLike}}>
            {children}
        </NewsContext.Provider>
    );
};
