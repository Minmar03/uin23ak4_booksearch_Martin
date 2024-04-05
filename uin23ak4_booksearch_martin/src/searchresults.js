
import React from 'react';
import BookCard from './bookcard';

//brukte chatgpt og 
//https://dev.to/tauantcamargo/react-hooks-what-is-it-how-to-use-it-pt-2-using-usestate-and-useeffect-4mee
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
