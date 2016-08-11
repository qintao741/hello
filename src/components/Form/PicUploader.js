import React from 'react';
import Upload from '../rc-upload/';

let PicUploader = React.createClass({
    getInitialState() {
        return {
            uploading: false
        };
    },

    _onSuccess(rtv) {
        this.setState({uploading: false});
        this.props.onSuccess(rtv);
    },

    _onProgress() {
        this.setState({uploading: true});
        this.props.onProgress();
    },

    _onError(error) {
        this.setState({uploading: false});
        this.props.onError(error);
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

        var props = {
            name: 'file',
            action: this.props.action,
            onStart: (file) => {
                if (!(/\.(jpg|jpeg|png)$/i).test(file.name)) {
                    this.props.onError('请上传jpg jpeg png格式的图片');
                    return false;
                }
            },
            onSuccess: this._onSuccess,
            onProgress: this._onProgress,
            onError: this._onError,
            readOnly: this.props.readOnly
        };

        return (
            <Upload {...props}>
                {this.state.uploading
                    ? (<a className='bigger-110 btn btn-sm btn-info'>上传中...</a>)
                    : (<a className='bigger-110 disabled' style={styles.btnUpload}>上传图片</a>)
                }
            </Upload>
        );
    }
});

export default PicUploader;
