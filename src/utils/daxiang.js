import Promise from 'promise';
import {get, post} from './http';

import cookie from 'react-cookie';

var sucCBList = [];
var errCBList = [];
var opts = null;

var extend = function extend(obj) {
    var args = Array.prototype.slice.call(arguments, 1);


    args.forEach(function(o) {
        // Object.keys(o).forEach(function(prop) {
        //     obj[prop] = o[prop];
        // });
        for(var k in o) {
            obj[k] = o[k];
        }
    });

    return obj;
};


var opts = window.common;

var getOpts = function(){
    authorization(opts);
    // config(opts);
}


var config = function(opts) {
    opts = extend({
        appKey: '',
        jsTicket: ''
    }, opts);
    authorization(opts);
};
var ready= function(fn) {
    sucCBList.push(fn);
};
var error = function(errfn) {
    errCBList.push(errfn);
};
/**
 * 授权页面
 */
if(!sessionStorage.getItem("flag")){
    sessionStorage.setItem("flag",0);
}
var authorization =  function(opts) {
    var self = this;
    if(sessionStorage.getItem("flag") == 0) {
        sessionStorage.setItem("flag",1);
        _request('native_api/auth', {
            appKey: opts.appKey,
            jsTicket: opts.jsTicket
        }, true).then(function (json) {
            if (json.result) {
                //成功
                sucCBList.forEach(function (fn) {
                    fn.call(self);
                })
            } else {
                var failUrl = location.origin+"/checkin/auth?redirectUri="+encodeURI(location.href);
                location.href = failUrl;
                //失败
                errCBList.forEach(function (fn) {
                    fn.call(self);
                })
                reportErr(json.error, json.msg);

            }
        }).catch(function (json) {

            reportErr(json.error, json.msg);
        });
    }else{

        sucCBList.forEach(function (fn) {
            fn.call(self);
        })
    }
};



const _prefix = 'mtdaxiang://www.meituan.com/';

//将报错信息传回后台
function reportErr(situation, msg) {
    post('/checkin/error',
        {
            situation: situation,
            msg: msg
        })
}


var global = window;
/**
 * 发起请求的方法
 * @param {string} method 请求方法名
 * @param {object} params 请求参数
 * @param {boolean} hacCB 是否需要回调
 * @param {string | undefined} CBPrefix 回调前缀, 默认为cb，尽在hasCB为true才有用
 * @param {boolean | undefined} notCleanCB 不自动清除回调，仅在hasCB为true的时候有效
 * @returns {object} promise
 * @private
 */

function _request(method, params, hasCB, CBPrefix, notCleanCB) {
    var self = this;
    CBPrefix = CBPrefix ? CBPrefix: 'cb';
    var funName = CBPrefix + Math.floor(Math.random() * 1000000), promise, url;
    url = _prefix + method + '?';
    return new Promise(function (resolve, reject) {
        if(hasCB) {
            url += 'cb='  + funName;
            if (global[funName]) {
                resolve({result: 'success'});
                !notCleanCB && delete global[funName];
            }else {
                global[funName] = function (json) {
                    try {
                        resolve(JSON.parse(json));
                    } catch (e) {
                        reject({error: true, msg: json});
                    }
                    !notCleanCB && delete global[funName];
                }
            }
        }else {
            resolve({result: 'success'});
        }
        if(method == 'native_api/auth'){
            url += '&appId=' + opts.appKey + '&token=' + opts.jsTicket;

        }else if(params && typeof params === 'object') {
            let paramStr = Object.keys(params).map((k) => {
                return encodeURIComponent(k) + '=' + encodeURIComponent(params[k])
            }).join('&');
            url += (hasCB ? '&' : '') + paramStr;

        }else if(url.indexOf("selectpeers")>0){

            url +="&selectedUid="+params;
        }
        if (method != 'native_api/auth') {
            //后面拼接上appId 和 token
            url += '&appId=' + opts.appKey + '&token=' + opts.jsTicket;
        }
        location.href = url;
    });
}
module.exports = {
    init: function (fn){
        sucCBList.push(fn);
        return getOpts();
    },
    chat: function (params) {
        return _request('chat', params, false);
    },
    getPhoto: function (action) {
        return _request('image', 'camera' === action ? {capture: action} : null, true);
    },
    closeWindow: function () {
        return _request('close', null, false);
    },
    setTitle: function (title) {
        return _request('title', {titleString: title}, false);
    },
    locate : function (){
        var param = {
            dialog : 0,
            titlebarVisible : 1,
            toolbarVisible :0

        };
        return _request('location', param, true);
    }
    ,
    topMenu : function (menus){

        var CBPrefix = 'cb';
        var funName = CBPrefix + Math.floor(Math.random() * 1000000), url;

        url = _prefix + 'topMenu' + '?params=' + global.encodeURIComponent(JSON.stringify({menus: menus, cb: funName}));

        return new Promise(function (resolve, reject) {
            global[funName] = function (json) {
                try {
                    resolve(JSON.parse(json));
                } catch (e) {
                    reject({error: 'json parse error', result: false});
                }
            }
            location.href = url;
        });

    }
};
