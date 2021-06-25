import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

import styles from '../../styles.css';

const Input = ({
  id,
  handleClick,
} :
{
  id: string,
  handleClick: () => void,
}): JSX.element => {
  
  return (
    <div>
      <label />
      <input id={`${id}-input`} className={styles.inputField} />
      <button
        className={styles.calendarButton}
        type="button"
        onPointerDown={handleClick}
      >
        <FontAwesomeIcon icon={faCalendar} size="1.5x" />
      </button>
    </div>
  );
};

export default Input;
