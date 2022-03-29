import { time } from './nav.js';
import { DateTime } from './luxon.js';

/* eslint-disable import/prefer-default-export */
const myLocalDate = () => {
  time.innerHTML = DateTime.now().toLocaleString(
    DateTime.DATETIME_MED_WITH_SECONDS
  );
};
export { myLocalDate };