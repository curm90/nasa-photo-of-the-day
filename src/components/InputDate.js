import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 2rem;

  p {
    font-size: 1.2rem;
  }

  input {
    margin: 1rem 0 2rem 0;
    width: 20rem;
    font-size: 1.6rem;
    padding: 1rem;
    outline: none;
    background: none;
    border: 1px solid white;
    color: whitesmoke;
    text-transform: uppercase;
  }
`;

const InputDate = ({ handleDateChange, dateQuery }) => {
  return (
    <StyledInput className="input-container">
      <p>
        Select a date from the dropdown menu to reveal the NASA photo of the
        day!
      </p>
      <input
        className="date-input"
        type="date"
        onChange={handleDateChange}
        value={dateQuery}
      />
    </StyledInput>
  );
};

export default InputDate;
