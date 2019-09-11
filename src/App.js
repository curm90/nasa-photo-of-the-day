import React, { useState, useEffect } from 'react';
import './App.css';
import { MediaUrl } from './MediaUrl';
import { Explanation } from './Explanation';
import { PhotoDate } from './PhotoDate';
import { Title } from './Title';

const axios = require('axios');

const apiKey = '0T7g7WYSUw4zezlzMYFTNDgOYldC5fpY3dGvix03';

function App() {
  const [mediaUrl, setImage] = useState('');
  const [mediaType, setMediaType] = useState('');
  const [title, setTitle] = useState('');
  const [explanation, setExplanation] = useState('');
  const [date, setDate] = useState('');
  const [dateQuery, setDateQuery] = useState('2019-02-14');

  const handleDateChange = e => {
    setDateQuery(e.target.value);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateQuery}`
      )
      .then(res => {
        setTitle(res.data.title);
        setDate(res.data.date);
        setImage(res.data.url);
        setExplanation(res.data.explanation);
        setMediaType(res.data.media_type);
      })
      .catch(err => {
        console.log(err);
      });
  }, [dateQuery]);

  return (
    <div className="App">
      <h1>NASA Photo Of The Day</h1>
      <Title title={title} />
      <PhotoDate date={date} />
      <MediaUrl mediaUrl={mediaUrl} mediaType={mediaType} />
      <Explanation explanation={explanation} />
      <input type="date" onChange={handleDateChange} value={dateQuery} />
    </div>
  );
}

export default App;
