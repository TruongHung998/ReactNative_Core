import Config from '../config'
import _const from '@constants/common'
import store from '@shared/redux/store/index'
import {Alert} from "react-native";
import {resetStackAction} from "@utilities/navigationAction";

//Handle Requeset Api, Where to return results

const internalSuccessHandler = (response: any, resolve: (result: any) => void, reject: (error: any) => void) => {
    const {statusCode} = response;
    if (statusCode) {
        if (statusCode !== 200 && statusCode !== 201) {
            reject(response);
        }
    } else
        resolve(response);
};

export const requestApi = (api: any, header: any = null, url: string, body: any) => {
    return new Promise((resolve, reject) => {
        const state = store.getState();
        // const _accessToken = selectAccessToken(state)
        // const _refreshToken = selectRefreshToken(state)
        if (header == null)
            // if (_accessToken) {
            //     header = {
            //         ...header,
            //         Authorization: `Bearer ${_accessToken}`,
            //     }
            // }
            api(header, url, body, (status: number, response: any) => {
                //console log if hard mode == true
                if (Config.SHOW_LOG) {
                    console.log('%c <----------Begin API----------->', 'background: #222; color: #f0505d');
                    console.log(`%c METHOD ${api.name}`, 'background: #222; color: #bada55');
                    console.log('API: ', url);
                    console.log('HEADER: ', header);
                    console.log('BODY: ', body);
                    console.log('BODY: ', JSON.stringify(body));
                    console.log('RESPONSE: ', response);
                    console.log('STATUS: ', status);
                    console.log('                              ');
                }
                //handle status && response
                switch (status) {
                    case _const.SUCCESS :
                        const {statusCode} = response
                        if (statusCode) {
                            if (statusCode !== 200 && statusCode !== 201) {
                                // if (_refreshToken !== '' && _refreshToken) {
                                //     store.dispatch(refreshTokenAction(_refreshToken, (_newAccessToken) => {
                                //         header = {
                                //             ...header,
                                //             Authorization: `Bearer ${_newAccessToken}`,
                                //         };
                                //         api(header, url, body, (status: number, response: any) => {
                                //             if (Config.SHOW_LOG) {
                                //                 console.log('METHOD', api.name);
                                //                 console.log('API: ', url);
                                //                 console.log('HEADER: ', header);
                                //                 console.log('BODY: ', body);
                                //                 console.log('BODY: ', JSON.stringify(body));
                                //                 console.log('RESPONSE: ', response);
                                //                 console.log('STATUS: ', status);
                                //             }
                                //             switch (status) {
                                //                 case _const.SUCCESS:
                                //                     internalSuccessHandler(response, resolve, reject)
                                //                     break;
                                //                 case _const.FAILURE:
                                //                     Alert.alert(label.failure, label.pls_login, [{
                                //                         text: label.login,
                                //                         onPress: () => resetStackAction(ROUTE_LOGIN)
                                //                     }])
                                //                     reject && reject(response)
                                //                     break;
                                //                 default:
                                //                     reject(response);
                                //                     break;
                                //             }
                                //         });
                                //     }, (error) => {
                                //         reject && reject(error)
                                //     }))
                                // } else resolve && resolve(response)
                            } else {
                                resolve && resolve(response)
                            }
                        } else {
                            resolve && resolve(response)
                        }
                        break;
                    case _const.FAILURE:
                        // if (_accessToken == "") {
                        //     reject && reject(response)
                        // } else {
                        //     // Alert.alert(label.failure, label.pls_login, [{
                        //     //     text: label.login,
                        //     //     onPress: () => resetStackAction(ROUTE_LOGIN)
                        //     // }])
                        //     Alert.alert(label.failure, message.internetCheck)
                        //     reject && reject(response)
                        // }
                        break;
                    default:
                }
            })
    })
}
