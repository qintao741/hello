'use strict';
var React = require('react');
var ReactDOM = require('react-dom');

var request = require('superagent');

function uid() {
    return Math.random().toString().slice(2);
}

var AjaxUploader = React.createClass({
    displayName: 'AjaxUploader',

    _onChange: function _onChange(e) {
        var files = e.target.files;
        this._uploadFiles(files);
    },

    _onClick: function _onClick() {
        var el = ReactDOM.findDOMNode(this.refs.file);
        if (!el) {
            return;
        }
        el.click();
        el.value = '';
    },

    _uploadFiles: function _uploadFiles(files) {
        var len = files.length;
        if (len > 0) {
            for (var i = 0; i < len; i++) {
                var file = files.item(i);
                this._post(file);
            }
        }
    },

    _post: function _post(file) {

        file.uid = uid();
        var props = this.props;
        if (props.onStart(file) === false) return;
        var req = request.post(props.action).attach(props.name, file, file.name);

        for (var key in props.data) {
            req.field(key, props.data[key]);
        }

        var progress = function progress(e) {
            props.onProgress(e, file);
        };

        req.on('progress', progress);

        req.end(function (err, ret) {
            req.off('progress', progress);
            if (err || ret.status !== 200) {
                var message = err ? err.message : ret.text;
                props.onError(message, file);
                return;
            }

            props.onSuccess(ret.body || ret.text, file);
        });
    },

    _onFileDrop: function _onFileDrop(e) {
        if (e.type === 'dragover') {
            return e.preventDefault();
        }

        var files = e.dataTransfer.files;
        this._uploadFiles(files);

        e.preventDefault();
    },

    render: function render() {
        var hidden = {display: 'none'};
        var props = this.props;
        return React.createElement(
            'span',
            {onClick: this._onClick, onDrop: this._onFileDrop, onDragOver: this._onFileDrop},
            React.createElement('input', {
                type: 'file',
                ref: 'file', style: hidden,
                accept: props.accept, onChange: this._onChange, disabled: props.readOnly

            }),
            props.children
        );
    }
});

module.exports = AjaxUploader;