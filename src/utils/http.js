import http from 'axios';
import logError from '../utils/logError';
import gritter from "./gritter";

module.exports = {
    get: function (url, callback,failCallback) {
        http.get(url)
            .then((res) => {

                if(res.data.code && res.data.code == 402){
                    gritter.error(res.data.msg);
                    failCallback&&failCallback(res);
                    return ;
                }

                if(res.data.code && res.data.code == 501){
                    failCallback&&failCallback(res);
                    return;
                }
                if(res.data.code && res.data.code !== 200){
                    failCallback&&failCallback(res);
                    gritter.error(res.data.msg);
                    return;
                }
                callback(res);
            })
            .catch(logError);
    },
    
    post: function (url,data , callback,failCallback) {
        http.post(url, data)
            .then((res) => {

                if(res.data.code && res.data.code == 403){
                    gritter.error(res.data.msg);
                    failCallback&&failCallback(res);
                    return;
                }
                if(res.data.code && res.data.code == 501){
                    failCallback&&failCallback(res);
                    return;
                }
                if(res.data.code && res.data.code !== 200){
                    failCallback&&failCallback(res);
                    gritter.error(res.data.msg);
                    return;
                }
                callback(res);
            })
            .catch(logError);
    },
    spliturl:function(url,o){
        var array1 = [];
        var array2 = [];
        var data = [];

        for(let i = 0;i<url.length;i++){
            if(url[i] == "{"){
                array1.push(i);
            }
            if(url[i] == "}"){
                array2.push(i);
            }
        }

        for(let i=0;i<array1.length;i++){
            data[i] = url.substring(array1[i]+1,array2[i]);

        }
        var newurl = "";
        var url1 = url;
        for(let i=0;i<data.length;i++){
            if(o[data[i]] || o[data[i]]==""){
                newurl = url1.replace("{"+data[i]+"}",o[data[i]]);
                url1 = newurl;
            }
        }
        return newurl;
    },
    //将按钮置灰
    DisableButton:(id,backgroundColor,flag)=>{
        var b = document.getElementById(id);
        b.disabled = flag;
        b.style.backgroundColor=backgroundColor;
    },
    changeInputBorderColor:(id,color="red")=>{
        let b = document.getElementById(id);
        b.style.border = `1px solid ${color}`;
    }

};
