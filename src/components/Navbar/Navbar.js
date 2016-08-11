/**
 * 业务需求固定，不会影响整体代码
 * @TODO: 移入 js （低）
 * */
import React from 'react';

let themeColor = '#00C3AF';

let Navbar = React.createClass({
    render() {
        const {brand, options, user, logoutUrl, count, task, msg,navs} = this.props;
        return (
            <div id='navbar' className='navbar navbar-default navbar-collapse' style={{}}>
                <div className='navbar-container' id='navbar-container'>
                    <NavbarHeader src={brand.src} url={brand.url} avatar={user.avatar} username={user.name}/>
                    <NavbarButtons avatar={user.avatar} username={user.name} logoutUrl={logoutUrl} options={options}
                                   count={count} task={task} msg={msg}/>
                    <NavbarMenu navs={navs}/>
                </div>
            </div>
        );
    }
});

/**
 * modified by bx
 * @TODO 用户头像（切换按钮）
 * */
let NavbarHeader = React.createClass({
    render() {
        const {src, url, username} = this.props;
        var avatar = this.props.avatar;
        if(!this.props.avatar){
            var avatar = 'http://i2.dpfile.com/ba/es/zhaopin/imgs/default_head.png';
        }
        const logoStyle = {
            width: '50px'
        };

        return (
            <div className='navbar-header pull-left'>
                <a href={url} className='navbar-brand' style={{padding: 1.5}}>
                    <img style={logoStyle} src={src}/>
                    <small>美团点评人力资源平台</small>
                </a>

               <button className='pull-right navbar-toggle navbar-toggle-img collapsed' type='button'
                        data-toggle='collapse' data-target='.navbar-buttons,.navbar-menu'>
                  <span className='sr-only'>Toggle user menu</span>
                  <img src={avatar} alt={`${username}'s Photo`}/>
                </button>
                <button className='pull-right navbar-toggle collapsed' type='button' data-toggle='collapse'
                        data-target='.sidebar'>
                  <span className='sr-only'>Toggle sidebar</span>
                  <span className='icon-bar'></span>
                  <span className='icon-bar'></span>
                  <span className='icon-bar'></span>
                </button>
            </div>
        );
    }
});

/**
 * @TODO 下拉菜单选项
 * */
let NavbarButtons = React.createClass({
    render() {
        const {username, logoutUrl} = this.props;
        var avatar = this.props.avatar;
        if(!this.props.avatar){
            var avatar = 'http://www.dpfile.com/ba/es/static/picture/celery/default_avatar.jpeg';
        }
        var useUrl = 'http://wiki.sankuai.com/pages/viewpage.action?pageId=475070793';
        return (
          <div className='navbar-buttons navbar-header pull-right navbar-collapse collapse' role='navigation'
               style={{'height': '1px'}}>
            <ul className='nav ace-nav'>
              <li className='transparent'>
                <a data-toggle='dropdown' className='dropdown-toggle' href='#'>
                  <span style={{
                    fontSize: '0.9em',
                    padding: '0 1em'
                  }}><i className='ace-icon fa fa-headphones'></i>&nbsp;&nbsp;问题或建议
                  </span>
                </a>

                <div className='dropdown-menu-right dropdown-navbar dropdown-menu dropdown-close'>
                  <div style={{
                    fontSize: '14px',
                    lineHeight: '2.2em',
                    padding: '10px 10px'
                  }}>

                  点我查看<a href={useUrl} target="_blank">考勤系统使用指南</a>，其他问题可联系6000帮助台寻求帮助！<br></br>
                  电话：分机6000  <br></br>
                                    外线：010-56116000 <br></br>
                  大象：6000帮助台 <br></br>                  邮箱：6000@meituan.com

                  </div>
                </div>
              </li>
              <li className='light-blue user-min'>
                <a data-toggle='dropdown' href='#' className='dropdown-toggle'>
                  <img className='nav-user-photo' src={avatar} alt={`${username}'s Photo`}/>
                  <span className='user-info'>
                    <small>你好，</small>
                    {username}
                  </span>
                  <i className='ace-icon fa fa-caret-down'></i>
                </a>
                <ul className='user-menu dropdown-menu-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close'>
                  <li>
                    <a href={logoutUrl}>
                      <i className='ace-icon fa fa-power-off'></i> 登出
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        );
  }
});

let NavbarMenu = React.createClass({
    render(){
        let navs = this.props.navs&& this.props.navs.map((item,idx)=>{
            return (<li key={idx+item.url}><a href={item.url}>{item.name}</a></li>);
        });
        return(
             <nav role='navigation' className='app-header navbar navbar-menu pull-left navbar-collapse collapse' style={{'height': '1px'}}>
                <ul className='nav navbar-nav'>
                  {navs}
                </ul>
              </nav>
        );
    }
});

export default Navbar;












