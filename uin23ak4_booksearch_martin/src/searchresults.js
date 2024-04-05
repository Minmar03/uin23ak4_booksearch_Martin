
import React from 'react';
import BookCard from './bookcard';


const SearchResults = ({ results }) => {
 
  return (
    <div className="search-results">
        
      {results.map((book, bok) => (
        <BookCard key={bok} book={book} />

      ))}
    </div>
  );
};

export default SearchResults;
