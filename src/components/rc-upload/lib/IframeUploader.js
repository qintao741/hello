'use strict';

var React = require('react');
var ReactDOM = require("react-dom");

var formStyle = {
    position: 'absolute',
    overflow: 'hidden',
    top: 0
};
var boxStyle = {
    position: 'relative'
};
var inputStyle = {
    position: 'absolute',
    filter: 'alpha(opacity=0)',
    outline: 0,
    right: 0,
    top: 0,
    fontSize: 100,
    cursor: 'pointer'
};

var IframeUploader = React.createClass({
    displayName: 'IframeUploader',

    getInitialState: function getInitialState() {
        return {
            width: 20, height: 12, uid: 1
        };
    },

    componentDidMount: function componentDidMount() {
        var el = ReactDOM.findDOMNode(this);
        this.setState({
            width: el.offsetWidth,
            height: el.offsetHeight
        });
    },

    _getName: function _getName() {
        return 'iframe_uploader_' + this.state.uid;
    },

    _onload: function _onload(e) {
        // ie8里面render方法会执行onLoad，应该是bug
        if (!this.startUpload || !this.file) {
            return;
        }

        var iframe = e.target;
        var props = this.props;
        var response;
        try {
            response = iframe.contentDocument.body.innerText;
            props.onSuccess(JSON.parse(response), this.file);
        } catch (err) {
            response = 'cross-domain';
            props.onError(err);
        }

        this.startUpload = false;
        this.file = null;

        this.setState({
            uid: this.state.uid + 1
        });
    },

    _getIframe: function _getIframe() {
        var name = this._getName();
        var hidden = {display: 'none'};
        return React.createElement('iframe', {
            key: name,
            onLoad: this._onload,
            style: hidden,
            name: name
        });
    },

    _onChange: function _onChange(e) {
        this.startUpload = true;
        this.file = e.target.files[0];
        this.props.onStart(this.file);
        ReactDOM.findDOMNode(this.refs.form).submit();
    },

    render: function render() {
        var props = this.props;
        var state = this.state;
        inputStyle.height = state.height;
        inputStyle.fontSize = Math.max(64, state.height * 5);
        formStyle.width = state.width;
        formStyle.height = state.height;

        var iframeName = this._getName();
        var iframe = this._getIframe();

        return React.createElement(
            'span',
            {style: boxStyle},
            React.createElement(
                'form',
                {
                    action: props.action,
                    target: iframeName,
                    encType: 'multipart/form-data',
                    ref: 'form',
                    method: 'post', style: formStyle
                },
                React.createElement('input', {
                    name: props.name,
                    type: 'file',
                    style: inputStyle,
                    accept: props.accept,
                    onChange: this._onChange,
                    disabled: props.readOnly
                })
            ),
            iframe,
            props.children
        );
    }
});

module.exports = IframeUploader;
