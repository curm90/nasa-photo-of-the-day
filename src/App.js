import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { InputDate } from './components/InputDate';
import { MediaUrl } from './components/MediaUrl';
import { Explanation } from './components/Explanation';
import { PhotoDate } from './components/PhotoDate';
import { Title } from './components/Title';

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
      <div className="header-container">
        <h1>NASA Photo Of The Day</h1>
      </div>
      <Title title={title} />
      <InputDate handleDateChange={handleDateChange} dateQuery={dateQuery} />
      <PhotoDate date={date} />
      <MediaUrl mediaUrl={mediaUrl} mediaType={mediaType} />
      <Explanation explanation={explanation} />
    </div>
  );
}

export default App;
