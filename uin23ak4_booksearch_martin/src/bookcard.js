import React from 'react';

//har fått hjelp av ChatGPT
//pluss Youtube videoer og nettsider hvor jeg har søkt på problemene jeg ville ha svar på
//

const BookCard = ({ book }) => {
  const { title, author_name, publish_year} = book;
  const firstPublishYear = publish_year && publish_year[0];


  const amazonSearchUrl = `https://www.amazon.com/s?k=${encodeURIComponent(title)}+${encodeURIComponent(author_name)}`;

  return (
    <div className="book-card">
      <div className="book-details">
         
      <h2>{title}</h2>
              <p>Forfatter: {author_name}</p>
              <p>Utgivelsesår: {firstPublishYear && firstPublishYear}</p>
               <a href={amazonSearchUrl} target="_blank" rel="noopener noreferrer">
               Søk opp på Amazon
             </a>
      </div>
    </div>
  );
};

export default BookCard;