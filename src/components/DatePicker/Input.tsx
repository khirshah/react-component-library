import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

import '../../styles.css';

const Input = ({
  id,
  handleClick,
} :
{
  id: string,
  handleClick: () => void,
}): JSX.Element => {
  
  return (
    <div>
      <label />
      <input id={`${id}-input`} className="inputField" />
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
