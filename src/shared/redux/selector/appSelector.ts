import {AllState} from "../constants/reducerStateTypes";
import {AppStateType} from "../reducers/appReducer";
import {ExampleForm} from "../constants/modalTypes";

const selectAppState = (state: AllState): AppStateType => {
    return state.app
}

export const selectForm = (state: AllState): ExampleForm | null => {
    return selectAppState(state)?.Form || null
}
