import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import {Navbar, Sidebar, BallLoader} from "./../../../components"

class BarPage extends Component {
    render() {
        const {pathname} = this.props.location;
        const sidebar = this.props.appjs.sidebar;
        const navs = this.props.appjs.navs;

        return (
            <div>
                <Navbar brand={{'src': 'https://www.dpfile.com/ba/es/static/picture/mydper/logo1.png', 'url': '#/nodeapi/tm/calendar/account'}}
                        user={{'name': window.common.employeeName, 'avatar': window.common.avatar }}
                        logoutUrl={window.common.logoutUrl} navs={navs}/>

                <div className='main-container' id='main-container'>
                    <Sidebar menuTree={sidebar} path={pathname}/>

                    <div className='main-content'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default BarPage;
