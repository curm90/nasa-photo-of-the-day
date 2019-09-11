import React from 'react';

export const InputDate = ({ handleDateChange, dateQuery }) => {
  return (
    <div className="input-container">
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
    </div>
  );
};
