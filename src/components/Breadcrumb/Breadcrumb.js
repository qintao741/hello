/**
 * 写法固定
 * @TODO propTypes 校验
 * */
import React from 'react';
import cx from 'classnames';

let Breadcrumb = React.createClass({
    render() {
        const {data} = this.props;
        let liDOM = data.map((item, idx) => {
            return (
                <li key={idx} className={cx({'active': item.url === undefined})}>
                    {item.icon !== undefined ?
                        <i className={`ace-icon fa fa-${item.icon} ${item.icon}-icon`}></i> : undefined}
                    {item.url === undefined ? item.name : <a href={item.url}>{item.name}</a>}
                </li>
            );
        });
        return (
            <div className='breadcrumbs' id='breadcrumbs'>
                <ul className='breadcrumb'>
                    {liDOM}
                </ul>
            </div>
        );
    }
});

export default Breadcrumb;
