import React from 'react';
import DatePicker from './components/DatePicker/DatePicker';

import styles from './styles.css';

const App = (): JSX.Element => (
  <div>
    <div className={styles.datePickerWrapper}>
      <DatePicker id='date-picker'/>
    </div>
  </div>
);

export default App;
