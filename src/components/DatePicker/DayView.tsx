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

  const daysBody = (dateString: string) => {
    const date = DateTime.fromISO(dateString);
    const firstDateDay = date.startOf('month').weekday;
    const lastDateDay = date.endOf('month').weekday;
    const prevMonth = date.minus({ months: 1 }).daysInMonth;

    const startDate = prevMonth - (firstDateDay - 2);
    const prevMonthDays = Array.from({ length: firstDateDay - 1 }, (e, i) => i + startDate);

    const endDate = 6 - (lastDateDay - 1);
    const nextMonthDays = Array.from({ length: endDate }, (e, i) => i + 1);

    const days = Array.from({ length: date.daysInMonth }, (e, i) => i + 1);

    const displayedDays = [
      ...prevMonthDays,
      ...days,
      ...nextMonthDays,
    ];

    const firstWeek = displayedDays.slice(0, 7);
    const secondWeek = displayedDays.slice(7, 14);
    const thirdWeek = displayedDays.slice(14, 21);
    const fourthWeek = displayedDays.slice(21, 28);
    const fifthWeek = displayedDays.slice(28, 35);

    return (
      <>
        <tr>
          {firstWeek.map((day: number) => (
            <Day key={`day-${day}`} id={(day).toString()} />
          ))}
        </tr>
        <tr>
          {secondWeek.map((day: number) => (
            <Day key={`day-${day}`} id={(day).toString()} />
          ))}
        </tr>
        <tr>
          {thirdWeek.map((day: number) => (
            <Day key={`day-${day}`} id={(day).toString()} />
          ))}
        </tr>
        <tr>
          {fourthWeek.map((day: number) => (
            <Day key={`day-${day}`} id={(day).toString()} />
          ))}
        </tr>
        <tr>
          {fifthWeek.map((day: number) => (
            <Day key={`day-${day}`} id={(day).toString()} />
          ))}
        </tr>
      </>
    );

    return days.map((day: number, i: number) => (
      <Day key={`day-${day}`} id={(i + 1).toString()} />
    ));
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
