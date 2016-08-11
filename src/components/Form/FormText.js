import React from 'react';
import Select from '../Select/Select';

let FormText = React.createClass({
  render() {
    const {label, value} = this.props;
    return (
      <div className='form-group'>
        <label className='col-md-2
                          col-sm-4
                          col-xs-4
                          col-mo-5
                          control-label no-padding-right'>{label}</label>

        <div className='col-md-8 col-sm-12 col-xs-10 col-mo-18'>
          <input readOnly type="text" style={{width: '100%'}}
                 value={value}/>
        </div>
      </div>
    )
  }
});

export default FormText;