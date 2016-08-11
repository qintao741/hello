/**
 * Button 独立使用的话，可以满足要求。
 * @TODO Button 增加 loading，尝试使用 promoise 能否实现
 * ```js
 * setBeginLoading()
 *    .then(this.props.click())
 *    .then(setEndLoading())
 * ```
 * */
import React from 'react';

let Button = React.createClass({
    render() {
        const {icon, name, busy,
            className, onClick, style} = this.props;
        return (
            <button className={`btn ${className === undefined ? '' : className} ${busy ? 'disabled':''}`}
                    onClick={onClick} style={style}>
                {icon !== undefined ? <i className={`ace-icon fa fa-${icon} bigger-110`}></i> : undefined}
                <span className='bigger-110 no-text-shadow'>{name}</span>
            </button>
        );
    }
});

export default Button;
