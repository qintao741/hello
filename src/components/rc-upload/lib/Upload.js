'use strict';
var React = require('react');
var PropTypes = React.PropTypes;
var AjaxUpload = require('./AjaxUploader');
var IframeUpload = require('./IframeUploader');
var empty = function empty() {
};

var Upload = React.createClass({
    displayName: 'Upload',

    propTypes: {
        action: PropTypes.string,
        name: PropTypes.string,
        multipart: PropTypes.bool,
        onError: PropTypes.func,
        onSuccess: PropTypes.func,
        onProgress: PropTypes.func,
        onStart: PropTypes.func,
        data: PropTypes.object,
        accept: PropTypes.string
    },

    getDefaultProps: function getDefaultProps() {
        return {
            data: {},
            name: 'file',
            multipart: false,
            onProgress: empty,
            onStart: empty,
            onError: empty,
            onSuccess: empty
        };
    },

    render: function render() {
        var props = this.props;
        var isNode = typeof window === 'undefined';
        // node环境或者支持FormData的情况使用AjaxUpload
        if (isNode || typeof FormData === 'function') {
            return React.createElement(AjaxUpload, props);
        }

        return React.createElement(IframeUpload, props);
    }
});

module.exports = Upload;