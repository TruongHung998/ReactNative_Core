/**
 * This file includes all the reducers under reducers directory,
 * Import all and add to combineReducers to use any among whole app
 */
import IosAsyncStorage from '@react-native-community/async-storage';
import AndroidAsyncStorage from 'redux-persist-filesystem-storage';
import {createMigrate, persistCombineReducers} from 'redux-persist'

import app from './appReducer';

import {Platform} from "react-native";
import reduxTransformer from "../store/reduxTransformer";

const migrations = {
    0: (state) => {
        // migration all state
        return {
            ...state
        }
    }
}

//AndroidAsyncStorage storage can be used on Android to prevent
// issues with the storage limitations in the RN AsyncStorage implementation.
const config = {
    key: 'root',
    //use migrations ver 1
    version: 1,
    transforms: [reduxTransformer],
    storage: Platform.select({
        ios: IosAsyncStorage,
        android: AndroidAsyncStorage
    }),
    whitelist: [
        'app',
    ],
    migrate: createMigrate(migrations, {debug: false}),

}


export const combinedReducer = persistCombineReducers(config, {
    app
})
