import React, { useContext, useEffect, useState } from 'react';
import NewsCard from '../components/NewsCard';
import SearchBar from '../components/SearchBar';
import { NewsContext } from '../context/NewsContext';
import { filterData } from '../static/FilterArticle';

export default function HomePage() {
    const { articles } = useContext(NewsContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [articlesPerPage] = useState(10);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('All');
    const [filteredArticles, setFilteredArticles] = useState([]);

    // Filtering Data on the basis of category and Search
    useEffect(() => {
        const newArticles = filterData({ data: articles, category, searchterm: search });
        setFilteredArticles(newArticles);
        setCurrentPage(1);
    }, [category, search, articles]);

    // Pagination Logic Starts
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);
    const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    // Pagination Logic ends

    return (
        <div className="flex flex-col items-center p-4">
            <h1 className="text-3xl font-bold mb-4 uppercase underline decoration-double">Top Headlines</h1>
            <SearchBar setSearch={setSearch} search={search} category={category} setCategory={setCategory} />
            <div className='p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full place-items-center max-w-screen-xl'>
                {currentArticles.length > 0 ? (
                    currentArticles.map((article, id) => (
                        <NewsCard key={id} article={article} setCategory={setCategory} />
                    ))
                ) : (
                    <p>No articles found.</p>
                )}
            </div>
            <div className="flex justify-center mt-4 *:border-solid *:border-[2px] *:border-gray-500 rounded-xl">
                <button
                    disabled={currentPage === 1}
                    className={`px-3 py-1 mx-1 rounded-md ${currentPage === 1 ? 'bg-gray-300 text-gray-500' : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'}`}
                    onClick={() => setCurrentPage((prev) => prev - 1)}>
                    Prev
                </button>   

                {[...Array(totalPages).keys()].map(number => (
                    <button
                        key={number + 1}
                        onClick={() => paginate(number + 1)}
                        className={`px-3 py-1 mx-1 rounded-md ${currentPage === number + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'}`}
                    >
                        {number + 1}
                    </button>
                ))}

                <button
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 mx-1 rounded-md ${currentPage === totalPages ? 'bg-gray-300 text-gray-500' : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'}`}
                    onClick={() => setCurrentPage((prev) => prev + 1)}>
                    Next
                </button>  
            </div>
        </div>
    );
}
