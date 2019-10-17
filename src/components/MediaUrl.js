import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const StyledMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    box-shadow: 1px 2px 1px #353434;
    border-radius: 0.5px;
  }
`;

const MediaUrl = ({ mediaUrl, mediaType }) => {
  return (
    <StyledMediaContainer>
      {mediaType === 'video' ? (
        <ReactPlayer
          className="media-video media"
          url={mediaUrl}
          alt="A NASA clip of the day"
        />
      ) : (
        <img
          className="media-image media"
          src={mediaUrl}
          alt="A NASA pic of the day"
        />
      )}
    </StyledMediaContainer>
  );
};

export default MediaUrl;
