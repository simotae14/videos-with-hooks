import axios from 'axios';

const KEY = 'AIzaSyBzr4VrTYqAQ7VwyDotNw5INnogN_HGgOk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
