
import axios from 'axios';
// brukte axios her fordi jeg trengte API til nettsiden

//litt hjep av chatgpt
const fetchJamesBondBooks = async () => {
  try {
    const response = await axios.get('http://openlibrary.org/search.json?q=james+bond');
    return response.data.docs;
    //https://stackoverflow.com/questions/77479792/axios-get-response-data-correct-but-promise-pending-to-variable
    //denne hjalp litt på error delen
  } catch (error) {

    console.error('error', error);
    return [];
  }
};

export default fetchJamesBondBooks;

