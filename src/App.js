import React, { useEffect } from 'react';
import './App.css';
import ReactPlayer from 'react-player';

const axios = require('axios');

const apiKey = '0T7g7WYSUw4zezlzMYFTNDgOYldC5fpY3dGvix03';

function App() {
  // const [mediaUrl, setImage] = useState('');
  // const [mediaType, setMediaType] = useState('');
  // const [title, setTitle] = useState('');
  // const [explanation, setExplanation] = useState('');
  // const [date, setDate] = useState('');
  // const [dateQuery, setDateQuery] = useState('2019-02-14');

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return <div className="App"></div>;
}

export default App;
