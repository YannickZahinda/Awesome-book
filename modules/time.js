import time from './nav.js';
import { DateTime } from './luxon.js';

const myLocalDate = () => {
  time.innerHTML = DateTime.now().toLocaleString(
    DateTime.DATETIME_MED_WITH_SECONDS
  )
};
export default myLocalDate;