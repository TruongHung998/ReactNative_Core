import {ExampleForm} from "../constants/modalTypes";

const PREFIX = 'APP/'
export const RECEIVE = PREFIX + 'RECEIVE';
export const CLEAR = PREFIX + 'CLEAR';

export interface Receive {
    type: typeof RECEIVE,
    data: ExampleForm
}

export interface Clear {
    type: typeof CLEAR,
}

export type AppActionTypes = Receive | Clear
