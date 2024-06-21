import React, { useContext, useState, useEffect } from 'react';
import { NewsContext } from '../context/NewsContext';

export default function SearchBar({ setSearch, search, category, setCategory }) {
    const { articles } = useContext(NewsContext);
    const [searchTerm, setSearchTerm] = useState(search);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const uniqueCategories = articles.reduce((acc, article) => {
            const normalizedCategory = article.category.toLowerCase();
            if (!acc.includes(normalizedCategory)) {
                acc.push(normalizedCategory);
            }
            return acc;
        }, []);
        setCategories(uniqueCategories);
    }, [articles]);

    useEffect(() => {
        setSearchTerm(search);
    }, [search]);

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value.toLowerCase();
        setCategory(selectedCategory);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        setSearch(searchTerm);
    };

    return (
        <div className='w-full flex flex-col md:flex-row gap-2 justify-between'>
            <div>
                <select
                    onChange={handleCategoryChange}
                    value={category.toLowerCase()}
                    className='p-2 rounded-lg focus:outline-none'
                >
                    <option value='all'>All</option>
                    {categories.map((value, index) => (
                        <option key={index} value={value}>
                            {value.charAt(0).toUpperCase() + value.slice(1)}
                        </option>
                    ))}
                </select>
            </div>
            <div className='flex flex-row gap-2'>
                <input
                    className='p-2 rounded-lg focus:outline-none'
                    type='text'
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder='Search News'
                />
                <button onClick={handleSearch} className='bg-blue-500 text-white px-2 rounded-lg'>
                    Search
                </button>
            </div>
        </div>
    );
}
