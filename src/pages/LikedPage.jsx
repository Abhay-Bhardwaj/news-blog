import React, { useContext } from 'react';
import { NewsContext } from '../context/NewsContext';
import NewsCard from '../components/NewsCard';

export default function LinkedPage() {
    const { articles, liked } = useContext(NewsContext);

    return (
        <div>
            {liked.length !== 0 ? (
                <div className='flex flex-col align-middle items-center'>
                    <h2 className='text-3xl font-bold underline'>Liked Posts</h2>
                    <div className='p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full place-items-center max-w-screen-xl'>
                        {articles.map((article, id) => (
                            liked.includes(article.id) && <NewsCard key={id} article={article} id={id} />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="text-center mt-8">
                    <p className="text-lg text-gray-600">You haven't liked any articles yet.</p>
                </div>
            )}
        </div>
    );
}
