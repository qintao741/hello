import "babel-polyfill";
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Redirect } from 'react-router';
import './total.css';
import "./main.less";

import createHashHistory from 'history/lib/createHashHistory';
import configureStore from './store/configureStore';
import BarContainer from "./pages/Bar/BarContainer";
import textContainer from "./pages/textContainer";

const history = createHashHistory();
const store = configureStore();

class Main extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history} >
                    <Route component={BarContainer} path="/Bar" />
                    <Route component={textContainer} path="/" />

                    <Redirect from="/" to="/" />
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));

