import React, {memo} from "react";
import {StackNavigator} from "./index";
import {ROUTE_HOME} from "./routeName";

import {LAYOUT} from "../constants/globalStyles";
import HomePage from "../view/screen/home";

export default memo(() => {
    return (
        <StackNavigator.Navigator
            screenOptions={{
                headerBackTitleVisible: false,
                headerTintColor: 'black',
                headerTitleAlign: 'left',
                headerLeftContainerStyle: LAYOUT.headerLeftContainerStyle
            }}
        >
            <StackNavigator.Screen
                name={ROUTE_HOME}
                component={HomePage}
                options={{headerShown: false}}
            />
        </StackNavigator.Navigator>
    )
})
