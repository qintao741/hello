/**
 * Sidebar 整体开发完成
 * @TODO 将 js DOM 操作逻辑移入。（低）
 * */
import React from 'react';
import cx from 'classnames';

let Sidebar = React.createClass({
    render() {
        const {menuTree, path} = this.props;
        let menuDOM = menuTree.map((item, idx) => {
            return (<SidebarMenu key={idx} menu={item} path={path}/>);
        });
        return (
            <div id='sidebar' className='sidebar navbar-collapse collapse'>
                <ul className='nav nav-list'>
                    {menuDOM}
                </ul>
                <div className='sidebar-toggle sidebar-collapse' id='sidebar-collapse'>
                    <i className='ace-icon fa fa-angle-double-left' data-icon1='ace-icon fa fa-angle-double-left'
                       data-icon2='ace-icon fa fa-angle-double-right'></i>
                </div>
            </div>
        );
    }
});

let SidebarMenu = React.createClass({
    render() {
        const isNotEmpty = (arr) => arr !== undefined && arr.length > 0;
        const isActive = (url, path) => path == (url.split('#')[1]) ;
        const {menu, path} = this.props;
        const {icon, name, url, children, target} = menu;
        
        const getMenuIconDOM = () => {
            if (icon !== null) {
                return (
                    <i className={'menu-icon fa fa-' + icon.substring(icon.indexOf('-')+1)}></i>
                );
            } else {
                return (
                    <i></i>
                );
            }
        };
        const getSubMenuDOM = () => {
            if (isNotEmpty(children)) {
                let liDOM = children.map((item, idx) => {
                    return (<SidebarMenu key={idx} menu={item} path={path}/>);
                });
                return (
                    <ul className='submenu'>{liDOM}</ul>
                );
            }
        };
        const getMenuItemDOM = () => {
            if (target === 0) {
                return (
                    <a href={url} className={cx({'dropdown-toggle': isNotEmpty(children)})}>
                        {getMenuIconDOM()}
                        <span className='menu-text'>{name}</span>
                        {isNotEmpty(children) ? <b className='arrow fa fa-angle-down'></b> : undefined}
                    </a>
                )
            } else {
                return (
                    <a href={url} className={cx({'dropdown-toggle': isNotEmpty(children)})}>
                        {getMenuIconDOM()}
                        <span className='menu-text'>{name}</span>
                        {isNotEmpty(children) ? <b className='arrow fa fa-angle-down'></b> : undefined}
                    </a>
                )
            }
        };
        return (
            <li className={cx({'active': isActive(url, path), 'open': isActive(url, path) && isNotEmpty(children)})}>
                {getMenuItemDOM()}
                <b className='arrow'></b>
                {getSubMenuDOM()}
            </li>
        );
    }
});

export default Sidebar;
