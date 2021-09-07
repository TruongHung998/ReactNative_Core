import React, {memo} from "react";
import {StackNavigator} from "./index";
import {ROUTE_EXAMPLE1, ROUTE_HOME} from "./routeName";

import {LAYOUT} from "../constants/globalStyles";
import HomePage from "../view/screen/home";
import HomePage2 from "../view/screen/home2";

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
                name={ROUTE_EXAMPLE1}
                component={HomePage2}
                options={{headerShown: false}}
            />
        </StackNavigator.Navigator>
    )
})
