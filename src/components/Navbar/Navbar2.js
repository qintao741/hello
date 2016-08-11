/**
 * 业务需求固定，不会影响整体代码
 * @TODO: 移入 js （低）
 * */
import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    const {brand, navs, user, logoutUrl} = this.props;
    return (
      <div id='header' className='app-header navbar navbar navbar-default navbar-collapse'>
        <div className='navbar-container' id='navbar-container'>
          <NavbarHeader brand={brand.name} url={brand.url} avatar={user.avatar} username={user.name}/>
          <NavbarButtons avatar={user.avatar} username={user.name} logoutUrl={logoutUrl}/>
          <NavbarMenu navs={navs}/>
        </div>
      </div>
    );
  }
}

/**
 * @TODO 用户头像（切换按钮）
 * */
class NavbarHeader extends Component {
  render() {
    const {brand, url, avatar, username} = this.props;
    return (
      <div className='navbar-header pull-left'>
        <a href={url} className='navbar-brand'>
          <small>{brand}</small>
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
}

/**
 * @TODO 下拉菜单选项
 * */
class NavbarButtons extends Component {
  render() {
    const {username, avatar, logoutUrl} = this.props;
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
                fontSize: '13px',
                lineHeight: '1.2em',
                padding: '10px 10px'
              }}>如有任何问题或产品建议，联系<br/><br/>
                021-53559777-1829<br/><br/>
                或邮件 <a href="mailto:es.ba@dianping.com">es.ba@dianping.com</a><br/><br/>
                也欢迎在 <a href='http://bbs.dper.com/bbs/forum.php?mod=post&action=newthread&fid=37'
                        target="_blank">BBS 建言献策</a> 给出建议。
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
}

class NavbarMenu extends Component {

  render() {
    let navs =this.props.navs&& this.props.navs.map((item, idx) => {
      return (<li key={idx + item.url}><a href={item.url}>{item.name}</a></li>);
    });
    return (
      <nav role='navigation' className='app-header navbar navbar-menu pull-left navbar-collapse collapse' style={{'height': '1px'}}>
        <ul className='nav navbar-nav'>
          {navs}
        </ul>
      </nav>
    );
  }
}

export default Navbar;

