import React from 'react';
import { DateTime } from 'luxon';

import Day from './Day';
import '../../styles.css';

const DayView = ({
  displayedDate,
}:
{
  displayedDate: string,
}): JSX.Element => {
  const daysHeader = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return days.map((day) => (
      <th key={day} className="dayName">
        {day}
      </th>
    ));
  };

  const renderDays = (dateString: string) => {
    const date = DateTime.fromISO(dateString);
    const days = Array.from(Array(date.daysInMonth).keys());
    return days.map((day: number, i: number) => (
      <Day key={`day-${day}`} id={(i+1).toString()} />
    ));
  };
  return (
    <div className="dayView">
      <table>
        <thead><tr>{daysHeader()}</tr></thead>
        <tbody>{renderDays(displayedDate)}</tbody>
      </table>
    </div>
  );
};

export default DayView;
