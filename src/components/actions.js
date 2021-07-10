import axios from 'axios';

const getWiki = () => {
    axios
      .get('https://en.wikipedia.org/w/api.php')
      .then(response => {
        setText(response.data);
      })
      .catch(error => {
        console.error('Server Error', error);
      })
}