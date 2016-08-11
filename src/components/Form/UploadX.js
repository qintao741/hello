import React from 'react';
import Upload from '../rc-upload/';

let UploadX = React.createClass({
    getInitialState() {
        return {
            uploading: false
        };
    },

    _onSuccess(rtv) {
        this.setState({uploading: false});
        this.props.onSuccess(rtv);
    },

    _onProgress(step) {
        this.setState({uploading: true});
    },

    _onError(error) {
        this.setState({uploading: false});
        this.props._onError(error);
    },

    render() {
        var styles = {
            btnUpload: {
                'display': 'inline-block',
                'border': '1px solid',
                'padding': '7px 7px 6px 7px',
                'backgroundColor': '#6fb3e0',
                'color': 'white',
                'cursor': 'pointer',
                'textDecoration': 'none'
            }
        };
        console.log(this.props)
        var props = {
            name: 'file',
            action: this.props.action,
            onStart: (file) => {
                //console.log('onStart', file.name || file.value);
            },
            onSuccess: this._onSuccess,
            onProgress: this._onProgress,
            onError: this._onError
        };

        return (
            <Upload {...props}>
                {this.state.uploading
                    ? (<a className='bigger-110 btn btn-sm btn-info disabled'>上传中...</a>)
                    : (<a className='bigger-110' style={styles.btnUpload}>上传文件</a>)
                }
            </Upload>
        );
    }
});

export default UploadX;
