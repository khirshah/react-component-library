import React, { useReducer } from 'react';

import Input from './Input';
import DayView from './DayView';
import MonthView from './MonthView';
import YearView from './YearView';
import stateMachine from './reducers/stateMachine';

import '../../styles.css';

import {
  ActionType,
  StateType,
} from './types/stateMachineTypes';

type DatePickerInput = {
  id: string,
}

const DatePicker = ({
  id,
}: DatePickerInput): JSX.Element => {
  const [state, dispatch] = useReducer(stateMachine, { currentStatus: StateType.Idle });

  const handleCalendarButtonClick = () => {
    dispatch({
      type: ActionType.UserClickedCalendarButton,
    });
  };

  return (
    <div className="datePicker">
      <Input id={id} handleClick={handleCalendarButtonClick} />
      { state.currentStatus !== StateType.Idle
        && (
        <div className="calendar">
          { state.currentStatus === StateType.DayView
          && <DayView />}
          { state.currentStatus === StateType.MonthView
          && <MonthView />}
          { state.currentStatus === StateType.YearView
          && <YearView />}
        </div>
        )}
    </div>
  );
};

export default DatePicker;
