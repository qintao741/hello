/**
 * InputGroup 是由 input 和 button 组合的。button 已经替换成了 Button 组件
 * 其他的都是 Form 里的子组件，等写到一定程度后也替换掉
 * @TODO 另外可以考虑使用 mobile 时，保留图标，去除文字
 * */
import React from 'react';
import Button from '../Button/Button';
import cx from 'classnames';

let InputGroup = React.createClass({
  render() {
    const {onClick, onChange, value, placeholder, doing} = this.props;
    return (
      <div className='input-group'>
        <input type='text'
               value={value}
               className='form-control search-query'
               placeholder={placeholder}
               onChange={onChange}/>
        <span className='input-group-btn'>
          <Button className={cx('btn-primary btn-sm', {disabled: doing})}
                  name={doing ? '搜索...' : '搜索'}
                  onClick={onClick}/>
        </span>
      </div>
    );
  }
});

export default InputGroup;
