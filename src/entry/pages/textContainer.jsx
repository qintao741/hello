import React,{Component} from "react";
import {Button} from "./../../components";

class textContainer extends Component{
    render(){
        return (
            <div>
            <dl className="dl-horizontal">
                <dt>奥斯卡今年的看的看见你的咖啡能拉开那地方看见俺师傅看那</dt>
                <dd>案件发空间按声卡的积分卡加水淀粉快捷按键</dd>
            </dl>
            <dl className="dl-horizontal">
                <dt>奥斯卡今年的看的看见你的咖啡能拉开那地方看见俺师傅看那</dt>
                <dd>案件发空间按声卡的积分卡加水淀粉快捷按键</dd>
            </dl>
                For example, <code>&lt;section&gt;</code> should be wrapped as inline.
                <span className="glyphicon glyphicon-search" aria-hidden="true"></span><br />
                <button type="button" className="btn btn-default" aria-label="Left Align">
                    <span className="glyphicon glyphicon-align-left" aria-hidden="true"></span>
                </button>

                <button type="button" className="btn btn-default btn-lg">
                    <span className="glyphicon glyphicon-star" aria-hidden="true"></span> Star
                </button>
                <div className="alert alert-danger" role="alert">
                    <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                    <span className="sr-only">Error:</span>
                    Enter a valid email address
                </div>
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown trigger
                        <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dLabel">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li><a href="#">Separated link</a></li>
                    </ul>
                </div>
                <div className="dropdown">
                    <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Dropdown
                        <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li><a href="#">Separated link</a></li>
                    </ul>
                </div>
                <div>
                    <Button>这是测试按钮</Button>
                </div>
                </div>
        );
    }
}

export default textContainer;