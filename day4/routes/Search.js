import React from 'react';

const Search = ({location}) => {
    return (
        <div>
            {/* Search Keyword: {location.Search} */}
            Search Keyword: {new URLSearchParams(location.Search).get("keyword")}
        </div>
    );
};

export default Search;