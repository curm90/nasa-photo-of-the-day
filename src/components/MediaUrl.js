import React from 'react';
import ReactPlayer from 'react-player';
export const MediaUrl = ({ mediaUrl, mediaType }) => {
  return mediaType === 'video' ? (
    <ReactPlayer src={mediaUrl} alt="A NASA clip of the day" />
  ) : (
    <img src={mediaUrl} alt="A NASA pic of the day" />
  );
};
