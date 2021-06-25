import React, { useReducer } from 'react';

import Input from './Input';
import Calendar from './Calendar';
import stateMachine from './reducers/stateMachine';

import styles from '../../styles.css';

import type {
  ActionType,
  StateType,
} from './types/stateMachineTypes';

type DatePickerInput = {
  id: string,
}

const DatePicker = ({
  id,
}: DatePickerInput): JSX.element => {
  const [state, dispatch] = useReducer(stateMachine, { currentStatus: StateType.Idle });

  const handleCalendarButtonClick = () => {
    dispatch({
      type: ActionType.UserClickedCalendarButton,
    });
  };

  return (
    <div className={styles.datePicker}>
      <Input id={id} handleClick={handleCalendarButtonClick}/>
      <div className={styles.calendar}>
        
      </div>
    </div>
  );
};

export default DatePicker;
