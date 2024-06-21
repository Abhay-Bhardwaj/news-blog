import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NewsContext } from '../context/NewsContext';
import { CalendarDays, User } from 'lucide-react';
import ArticleDate from '../static/DateFomat';

export default function ArticlePage() {
    const { id } = useParams();
    const { articles, liked, toggleLike} = useContext(NewsContext);
    const [article, setArticle] = useState(null);

    useEffect(() => {
        const foundArticle = articles.find(article => article.id === id);
        if (foundArticle) {
            setArticle(foundArticle);
        }
    }, [id, articles]);

    if (!article) return <p>Articel Not Found</p>;

    return (
        <div className='p-2'>
            <div className="relative container mx-auto max-w-5xl px-2 sm:px-4  flex flex-col items-center">
                {article.urlToImage ? <img className="w-full h-96 mx-6 object-cover rounded-lg" src={article.urlToImage} alt={article.title} /> : <img className="w-full h-96 object-cover rounded-lg" src={'https://picsum.photos/500/700?random=1'} alt={article.title} />}
                <div className='absolute m-2 top-1 left-4 text-md font-semibold border-solid border-2 border-white rounded-xl px-2 bg-yellow-300'>{article.category}</div>
                <div className='bg-white rounded-xl px-4 py-2 -translate-y-4'>
                    <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
                    <h5 className='flex flex-col md:flex-row justify-between md:items-center font-semibold mb-2'>
                        <div className='flex flex-row items-center'><User className='h-5 w-5'/>{article.author}</div>
                        <div className='flex flex-row items-center'>{<CalendarDays className='h-5 w-5' />}{<ArticleDate publishedAt={article.publishedAt} />}</div>
                        
                    </h5>
                    <hr></hr>
                    <p className="text-gray-700 my-4">{article.content}</p>
                </div>

                <button className="absolute m-2 top-1 right-4" onClick={()=>toggleLike(article.id)}>
                    <svg width="25px" height="25px" viewBox="0 0 24.00 24.00" fill={liked.includes(article.id) ? 'red' : 'transparent'} xmlns="http://www.w3.org/2000/svg" stroke={liked.includes(article.id) ? 'red' : 'transparent'} transform="matrix(-1, 0, 0, 1, 0, 0)">
                        <path d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke={liked.includes(article.id) ? 'white' : 'red'} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

        </div>
    );
}
