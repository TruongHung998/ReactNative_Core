import React, {memo} from "react";
import {StackNavigator} from "./index";
import {ROUTE_EXAMPLE2} from "./routeName";

import {LAYOUT} from "../constants/globalStyles";
import HomePage3 from "../view/screen/home3";

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
                name={ROUTE_EXAMPLE2}
                component={HomePage3}
                options={{headerShown: false}}
            />
        </StackNavigator.Navigator>
    )
})
