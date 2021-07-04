import { DateTime } from 'luxon';

const today = ():string => DateTime.now().toISO();

export default today;
