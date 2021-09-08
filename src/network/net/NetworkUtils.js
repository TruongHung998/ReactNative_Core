const TIME_OUT = 8000
import _const from '../../constants/common'

//Set Timeout for call api
function timeout(ms, promise) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
        }, ms)
        promise.then(resolve, reject)
    })
}

//Handle HTTP Request
export default Object.freeze({
    get: function (header, url, body, callback) {
        timeout(TIME_OUT,
            fetch(url, {
                method: "GET",
                headers: header,
                body: null
            }))
            .then(response => response.json())
            .then(responseJson => {
                callback(_const.SUCCESS, responseJson);
            })
            .catch(error => {
                console.log(error, 'error')
                callback(_const.FAILURE, error);
            });
    },
    post: function (header, url, body, callback) {
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
            .then(response => response.json())
            .then(responseJson => {
                callback(_const.SUCCESS, responseJson);
            })
            .catch(error => {
                console.log(error, 'error')
                callback(_const.FAILURE, error);
            });
    },
    put: function (header, url, body, callback) {
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
            .then(response => response.json())
            .then(responseJson => {
                callback(_const.SUCCESS, responseJson);
            })
            .catch(error => {
                console.log(error, 'error')
                callback(_const.FAILURE, error);
            });
    },
    delete: function (header, url, body, callback) {
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
            .then(response => response.json())
            .then(responseJson => {
                callback(_const.SUCCESS, responseJson);
            })
            .catch(error => {
                console.log(error, 'error')
                callback(_const.FAILURE, error);
            });
    },
    upload: function (header, url, body, callback) {
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
            .then(response => response.json())
            .then(responseJson => {
                callback(_const.SUCCESS, responseJson);
            })
            .catch(error => {
                console.log(error, 'error')
                callback(_const.FAILURE, error);
            });
    }
})
