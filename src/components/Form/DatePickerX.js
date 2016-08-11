import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const empty = (obj) => {
  switch (typeof obj) {
    case 'undefined':
      return true;
    case 'string':
      return obj === undefined || obj.trim() === '';
    case 'object':
      return obj === null || Object.keys(obj).length === 0;
    default:
      return false;
  }
};

let DatePickerX = React.createClass({
  render() {
    const {key, selected, placeholder, onChange} = this.props;
    return (
      <DatePicker
        weekdays={['日', '一', '二', '三', '四', '五', '六']}
        key={key}
        selected={empty(selected) ? null : moment(selected)}
        placeholderText={placeholder}
        onChange={onChange}/>
    );
  }
});

export default DatePickerX;