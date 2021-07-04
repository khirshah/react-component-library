import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

import '../../styles.css';

const Input = ({
  id,
  handleChange,
  handleClick,
  value,
}:
{
  id: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleClick: () => void,
  value: string
}): JSX.Element => {
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event);
  };

  return (
    <div>
      <label />
      <input
        id={`${id}-input`}
        className="inputField"
        value={value}
        onInput={handleInput}
      />
      <button
        className="calendarButton"
        type="button"
        onPointerDown={handleClick}
      >
        <FontAwesomeIcon icon={faCalendar} size="sm" />
      </button>
    </div>
  );
};

export default Input;
