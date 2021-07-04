import React, { useReducer } from 'react';
import { DateTime } from 'luxon';

import Input from './Input';
import DayView from './DayView';
import MonthView from './MonthView';
import YearView from './YearView';

import stateMachine from './reducers/stateMachine';
import today from './today';

import '../../styles.css';

import {
  ActionType,
  StateType,
} from './types/stateMachineTypes';

type DatePickerInput = {
  id: string,
}

const initialState = {
  currentStatus: StateType.Idle,
  displayedDate: today(),
  selectedDate: today(),
  highLightedDate: today(),
  inputFieldValue: DateTime.fromISO(today()).toLocaleString(),
};

const DatePicker = ({
  id,
}: DatePickerInput): JSX.Element => {
  const [state, dispatch] = useReducer(stateMachine, initialState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionType.UserChagedDateString,
      payload: event.target.value,
    });
  };

  const handleCalendarButtonClick = () => {
    dispatch({
      type: ActionType.UserClickedCalendarButton,
    });
  };

  return (
    <div className="datePicker">
      <Input
        id={id}
        handleChange={handleInputChange}
        handleClick={handleCalendarButtonClick}
        value={state.inputFieldValue}
      />
      { state.currentStatus !== StateType.Idle
        && (
        <div className="calendar">
          { state.currentStatus === StateType.DayView
          && (
            <DayView
              displayedDate={state.displayedDate}
            />
          )}
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
