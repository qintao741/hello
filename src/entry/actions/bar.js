import {get, post} from '../../utils/http';
import logError from '../../utils/logError';
import moment from 'moment';

export const NAV_START = 'NAV_START';
export const NAV_GOT = 'NAV_GOT';


export function getBarsData(common) {
    return (dispatch) => {
        dispatch({type: NAV_START});
        let url = common.menuUrl+'?employeeId='+common.employeeId+'&siteId='+common.siteId;
        get(url, res => {
            dispatch({
                type: NAV_GOT,
                payload: res.data
            })
        });
    };
}



