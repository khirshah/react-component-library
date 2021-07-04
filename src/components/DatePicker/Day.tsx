import React from 'react';
import '../../styles.css';

const Day = ({
  label,
}: {label: string}): JSX.Element => (
  <div className="day">
    <button className="dayButton" type="button">{label}</button>
  </div>
);

export default Day;
