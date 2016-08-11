import React from 'react';
import './Loader.less';

export default React.createClass({

    render() {
        return (
            <div className="loading-bkg center">
                <div className="spinner">
                </div>
            </div>
        );
    }
});
