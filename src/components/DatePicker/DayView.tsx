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

  // TODO: this will not work on februarys, that start on monday
  // on non-leap years!! further tweak needed
  const daysBody = (dateString: string) => {
    const date = DateTime.fromISO(dateString);
    const firstDateDay = date.startOf('month').weekday;
    const lastDateDay = date.endOf('month').weekday;
    const prevMonth = date.minus({ months: 1 }).daysInMonth;

    const startDate = prevMonth - (firstDateDay - 2);
    const prevMonthDays = Array.from({ length: firstDateDay - 1 }, (e, i) =>
      <Day key={`day-prev-${i + startDate}`} id={(i + startDate).toString()} />);

    const days = Array.from({ length: date.daysInMonth }, (e, i) =>
      <Day key={`day-${i + 1}`} id={(i + 1).toString()} />);

    const endDate = 6 - (lastDateDay - 1);
    const nextMonthDays = Array.from({ length: endDate }, (e, i) =>
      <Day key={`day-next-${i + 1}`} id={(i + 1).toString()} />);

    const displayedDays = [
      ...prevMonthDays,
      ...days,
      ...nextMonthDays,
    ];

    const weeks = Array.from({ length: 5 }, (e, i) =>
      <tr key={`week-${i}`}>{displayedDays.slice(i * 7, i * 7 + 7)}</tr>);

    return weeks;
  };

  return (
    <div className="dayView">
      <table>
        <thead><tr>{daysHeader()}</tr></thead>
        <tbody>{daysBody(displayedDate)}</tbody>
      </table>
    </div>
  );
};

export default DayView;
