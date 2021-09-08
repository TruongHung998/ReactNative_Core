import {ExampleForm} from "../constants/modalTypes";
import {AppActionTypes, CLEAR, Receive, RECEIVE} from "../actionTypes/appActionTypes";


export interface AppStateType {
    id: number,
    name: string,
    Form: ExampleForm | null
}

const initialState: AppStateType = {
    id: 0,
    name: "",
    Form: null
};

const onExample = (state: AppStateType, action: AppActionTypes): AppStateType => {
    const _action = action as Receive
    const data = _action.data
    state = {
        ...state,
        Form: data
    }
    return state
}

export default (state = initialState, action: any) => {
    switch (action.type) {
        case RECEIVE:
            return onExample(state, action)
        case CLEAR:
            return onExample(state, action)
        default:
            return state;
    }
};


//Transform to JSON to save in localstorage
export const authStateToJs = (state: AppStateType): any => {
    const {
        id,
        name,
        Form,
    } = state
    return {
        id,
        name,
        Form,
    }
}

//get Infomation from localstorage
export const authStateFromJs = (state: AppStateType): any => {
    const {
        id,
        name,
        Form,
    } = state
    return {
        ...initialState,
        id,
        name,
        Form,
    }
}
