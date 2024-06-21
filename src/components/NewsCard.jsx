import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NewsContext } from '../context/NewsContext';

const NewsCard = ({ article, setCategory}) => {
    const { toggleLike, liked, } = useContext(NewsContext);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/article/${article.id}`);
    };

    const handleLike = () => {
        toggleLike(article.id);
    };

    return (
        <div className='relative max-w-sm hover:scale-105 transition-all ease-out duration-300'>
            <div onClick={()=>setCategory(article.category)} className='absolute cursor-pointer top-1 left-1 text-sm font-semibold border-solid border-2 border-white rounded-xl px-2 bg-yellow-300'>{article.category}</div>
            <div onClick={handleClick} className="cursor-pointer rounded-lg h-full">
                {article.urlToImage ? <img className="w-full h-48 object-cover rounded-lg" src={article.urlToImage} alt={article.title} /> : <img className="w-full h-48 object-cover rounded-lg" src={'https://picsum.photos/500/700?random=1'} alt={article.title} />}
                <div className="p-4 bg-white rounded-lg -translate-y-4 shadow-lg">
                    <h2 className="text-lg font-bold h-[86px] mb-1 line-clamp-3">{article.title}</h2>
                    <p className="text-gray-700 line-clamp-3 h-[78px] overflow-hidden">{article.description}</p>
                    <Link className="text-blue-500 font-semibold hover:underline" to={`/article/${article.id}`}>Read more{'>'}</Link>
                </div>
            </div>
            <button className="absolute top-1 right-1" onClick={handleLike}>
                <svg width="25px" height="25px" viewBox="0 0 24.00 24.00" fill={liked.includes(article.id) ? 'red' : 'transparent'} xmlns="http://www.w3.org/2000/svg" stroke={liked.includes(article.id) ? 'red' : 'transparent'} transform="matrix(-1, 0, 0, 1, 0, 0)">
                    <path d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke={liked.includes(article.id) ? 'white' : 'red'} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
};

export default NewsCard;
