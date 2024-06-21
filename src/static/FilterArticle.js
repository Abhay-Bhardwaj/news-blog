export const filterData = ({ data, category, searchterm }) => {

    const searchText = searchterm?.toLowerCase();
    const selectedCategory = category.toLowerCase();

    // Filter data based on search term and category
    const filteredData = data?.filter(item => {
        const matchesText = searchText? searchText.split(' ').some(word =>item.title?.toLowerCase().includes(word.toLowerCase())): true;
        const matchesCategory = selectedCategory === 'all' || item.category.toLowerCase() === selectedCategory;
        return matchesText && matchesCategory;
    });

    return filteredData;
};
