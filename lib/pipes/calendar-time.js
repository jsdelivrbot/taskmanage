import {Pipe} from 'angular2/core';
// We use the Moment.js library to convert dates to calendar times
import Moment from 'moment';

@Pipe({
  name: 'calendarTime'
})
export default class CalendarTime {
  // The transform method will be called when the pipe is used within a template
  transform(value) {
    if (value && (value instanceof Date || typeof value === 'number')) {
      return new Moment(value).calendar();
    }
  }
}
