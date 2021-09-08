//template action
import {AppDispatch} from '../store/index';
import {AppActionTypes, RECEIVE} from "../actionTypes/appActionTypes";
import {ExampleForm} from "../constants/modalTypes";
import {getApiExample} from "../../../network/net/api_example/apiExample";

export const getAction = (resolve: () => void, reject: (error: any) => void) => async (dispatch: AppDispatch) => {
    try {
        const result = await getApiExample()
        await dispatch(receiveAction(result))
        if (result)
            resolve && resolve()
        else reject && reject(result)
    } catch (e) {
        reject && reject(e)
    }
}
const receiveAction = (data: ExampleForm): AppActionTypes => {
    return {
        type: RECEIVE,
        data: data
    }
}
