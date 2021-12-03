import Toast from "react-native-toast-message";

const TIME_OUT = 8000
import _const from '../../constants/common'
import axios, {AxiosRequestConfig, Method} from 'axios';

function showErrorMessage(ms: string) {
    Toast.show({
        type: 'error',
        position: 'top',
        topOffset: 60,
        text2: ms,
        visibilityTime: 3000,
        /* @ts-ignore */
        isVisible: true
    });
}

//Set Timeout for call api
function timeout(ms: number, promise: any) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
        }, ms)
        promise.then(resolve, reject)
    })
}

//Handle HTTP Request
export default Object.freeze({
    get: function (header: any, url: string, body: any, callback: any) {
        const config: AxiosRequestConfig = {
            url,
            method: "GET",
            timeout: TIME_OUT,
            data: body
        }
        axios(config).then((response: any) => response.json())
            .then(responseJson => {
                callback(_const.SUCCESS, responseJson);
            })
            .catch(error => {
                if (error.message.includes('Network')) {
                    showErrorMessage('Vui lòng kiểm tra đường truyền internet');
                }
                console.log(error, 'error')
                callback(_const.FAILURE, error);
            });
        // timeout(TIME_OUT,
        //     fetch(url, {
        //         method: "GET",
        //         headers: header,
        //         body: null
        //     }))
        //     .then((response: any) => response.json())
        //     .then(responseJson => {
        //         callback(_const.SUCCESS, responseJson);
        //     })
        //     .catch(error => {
        //         console.log(error, 'error')
        //         callback(_const.FAILURE, error);
        //     });
    },
    post: function (header: any, url: string, body: any, callback: any) {
        let _header
        _header = {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...header,
        }
        timeout(TIME_OUT,
            fetch(url, {
                method: "POST",
                headers: _header,
                body: JSON.stringify(body)
            }))
            .then((response: any) => response.json())
            .then(responseJson => {
                callback(_const.SUCCESS, responseJson);
            })
            .catch(error => {
                console.log(error, 'error')
                callback(_const.FAILURE, error);
            });
    },
    put: function (header: any, url: string, body: any, callback: any) {
        let _header
        _header = {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...header,
        }
        timeout(TIME_OUT,
            fetch(url, {
                method: "PUT",
                headers: _header,
                body: JSON.stringify(body)
            }))
            .then((response: any) => response.json())
            .then(responseJson => {
                callback(_const.SUCCESS, responseJson);
            })
            .catch(error => {
                console.log(error, 'error')
                callback(_const.FAILURE, error);
            });
    },
    delete: function (header: any, url: string, body: any, callback: any) {
        let _header
        _header = {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...header,
        }
        timeout(TIME_OUT,
            fetch(url, {
                method: "DELETE",
                headers: _header,
                body: JSON.stringify(body)
            }))
            .then((response: any) => response.json())
            .then(responseJson => {
                callback(_const.SUCCESS, responseJson);
            })
            .catch(error => {
                console.log(error, 'error')
                callback(_const.FAILURE, error);
            });
    },
    upload: function (header: any, url: string, body: any, callback: any) {
        let _header
        _header = {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
            ...header,
        }
        timeout(TIME_OUT,
            fetch(url, {
                method: "POST",
                headers: _header,
                body: body
            }))
            .then((response: any) => response.json())
            .then(responseJson => {
                callback(_const.SUCCESS, responseJson);
            })
            .catch(error => {
                console.log(error, 'error')
                callback(_const.FAILURE, error);
            });
    }
})
