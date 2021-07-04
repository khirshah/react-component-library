import React from 'react';
import '../../styles.css';

const Day = ({
  id,
}: {id: string}): JSX.Element => (
  <td className="day">
    <button className="dayButton" type="button">{id}</button>
  </td>
);

export default Day;
