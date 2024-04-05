
import './App.css';
import React, { useState, useEffect } from 'react';
import SearchResults from './searchresults';
import BookCard from './bookcard';
import fetchJamesBondBooks from './books';


function App() {
  //https://stackoverflow.com/questions/62840284/typeerror-books-map-is-not-a-function-react
  //brukte den nettsiden pluss chatgpt
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
//brukte chatgpt på denne
  useEffect(() => {
    const getBooks = async () => {
      const jamesBondBooks = await fetchJamesBondBooks();
      setBooks(jamesBondBooks);
    };
    getBooks();
  }, []); 

  //https://www.dhiwise.com/post/e-target-react-exploring-the-power-of-event-handling fikk hjelp av denne nettsiden her
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
//https://www.tabnine.com/code/javascript/classes/react/BookCard
  //brukte chatgpt til denne også
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
//https://www.reddit.com/r/learnreactjs/comments/13vy7oj/placeholder_text_on_input_not_showing/?rdt=38988&onetap_auto=true&one_tap=true 
//denne hjalp meg med input delen med litt hjelp av chatgpt
  return (
    <div className="container">
      <h1>James Bond Bøker Liste</h1>
      
      <input
        type="text"
        className='søkbar'
        placeholder="Søk"
        name="søkebar"
        value={searchTerm}
        onChange={handleSearch}
      />

        <p>Du søker Bok:  {searchTerm}</p>
       
      <ul>
      {filteredBooks.map((book, bok) => (
          <li key={bok}>
            <div>
            <BookCard book= {book} />
            
            </div>
          </li>

        ))}
      </ul>
      <SearchResults results= {filteredBooks} />
    </div>
  );
  //fikk inspirasjon av denne linken også 
  //https://dev.to/tauantcamargo/react-hooks-what-is-it-how-to-use-it-pt-2-using-usestate-and-useeffect-4mee
}

export default App;
