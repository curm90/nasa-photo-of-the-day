import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  margin-bottom: 2rem;

  h1 {
    margin: 0;
    padding: 1rem 0;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>NASA Photo Of The Day</h1>
    </StyledHeader>
  );
};

export default Header;
