import Config from '../config'
import _const from '../constants/common'
import Utils from "../utilities/utils";
import store from '../shared/redux/store/index'

//Handle Requeset Api, Where to return results

export const requestApi = (api, header = {}, url, body) => {
    return new Promise((resolve, reject) => {
        const state = store.getState();
        header = {
            ...header,
            // Authorization: `Bearer ${token}`,
        }
        api(header, url, body, (status, response) => {
            //console log if hard mode == true
            if (Config.SHOW_LOG) {
                console.log('METHOD', api.name);
                console.log('API: ', url);
                console.log('HEADER: ', header);
                console.log('BODY: ', body);
                console.log('BODY: ', JSON.stringify(body));
                console.log('RESPONSE: ', response);
                console.log('STATUS: ', status);
            }
            //handle status && response
            switch (status) {
                case _const.SUCCESS :
                    if (response?.error) {
                    } else resolve && resolve(response)
                    break;
                case _const.FAILURE:
                    reject && reject(response)
                    break;
                default:
            }
        })
    })
}
