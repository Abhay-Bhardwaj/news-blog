import React, { useContext} from 'react';
import { NewsContext } from '../context/NewsContext';

export default function SearchBar({ setSearch, search, category, setCategory }) {
    const { articles } = useContext(NewsContext);

    const AllCategories = () => {
        const categories = articles.reduce((acc, article) => {
            if (!acc.includes(article.category)) {
                acc.push(article.category);
            }
            return acc;
        }, []);
        return categories;
    };

    return (
        <div className='w-full flex flex-col md:flex-row gap-2 justify-between'>
            <div>
                <select
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    className='p-2 rounded-lg focus:outline-none'
                    type='category'
                    placeholder='Category'
                >
                    <option value='all'>All</option>
                    {AllCategories().map((value, index) => (
                        <option key={index} value={value}>
                            {value}
                        </option>
                    ))}
                </select>
            </div>
            <div className='flex flex-row gap-2'>
                <input
                    className='p-2 rounded-lg focus:outline-none'
                    type='text'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search News'
                />
                <button className='bg-blue-500 text-white px-2 rounded-lg'>Search</button>
            </div>
        </div>
    );
}
