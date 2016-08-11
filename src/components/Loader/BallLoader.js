import React, {Component} from 'react';
import './Loader.less';

export default class BallLoader extends Component {

    render() {
        return (
            <div className="loading-bkg center">
                <div className="ball-loader">
                    Loading…
                </div>
            </div>
        );
    }
};
