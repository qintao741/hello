import React from 'react';
import Select from '../Select/Select';

let FormSelect = React.createClass({
  render() {
    const {label, value, options, onChange, searchable, multi, must, placeholder} = this.props;
    return (
      <div className='form-group'>
        <label className='col-md-2
                                    col-sm-4
                                    col-xs-4
                                    col-mo-5
                                    control-label no-padding-right'>
          {must ? <span style={{color:'#D35A42'}}> * </span> : undefined} {label}</label>

        <div className='col-md-8 col-sm-12 col-xs-10 col-mo-18'>
          <Select
            value={value}
            options={options}
            placeholder={placeholder || '请选择'}
            noResultsText='无选项'
            multi={multi}
            searchable={searchable}
            onChange={onChange}/>
        </div>
      </div>
    )
  }
});

export default FormSelect;