import React from 'react';
import DatePicker from './components/DatePicker/DatePicker';

import'./styles.css';

const App = (): JSX.Element => (
  <div>
    <div className="datePickerWrapper">
      <DatePicker id='date-picker'/>
    </div>
  </div>
);

export default App;
