/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {memo} from 'react';
import {useColorScheme, StatusBar} from 'react-native';


const App = memo(() => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <>
            <StatusBar
                backgroundColor="transparent"
                barStyle="dark-content"
            />
        </>
    )
})


export default App;
