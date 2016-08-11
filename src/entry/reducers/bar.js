import {NAV_START,NAV_GOT} from '../actions/bar';
import { setPath } from 'deep-state';
import moment from 'moment';



const initialState = {
    sidebar: [],
    navs:[]

};

export default function BarState(state = initialState, action = {}) {
    const { type, payload } = action;
    let clone = Object.assign({}, state);
    switch (type) {
        // reset
        case NAV_START:
            return clone;
        case NAV_GOT:
            clone.sidebar = payload.sidebar;
            clone.navs = payload.navs;
            //console.log(payload);
            return clone;

        default:
            return state;
    }
}
