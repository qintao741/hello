import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BarPage from './BarPage';
import * as barActions from './../../actions/bar';


class BarContainer extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        const { common } = window;
        dispatch(barActions.getBarsData(common));
    }

    render() {
        const { dispatch } = this.props;
        const actions = bindActionCreators(barActions, dispatch);
        return (
            <div>
                <BarPage {...this.props} actions={actions}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(BarContainer);
