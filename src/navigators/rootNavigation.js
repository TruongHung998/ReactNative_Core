import React, {memo} from 'react';
import {StackNavigator} from "./index";
import {NAVIGATION_MAIN_APP} from "./routeName";
import MainAppNavigation from "./mainAppNavigation";

const RootNavigation = memo((props) => {

    return (
        <StackNavigator.Navigator>

            <StackNavigator.Screen
                name={NAVIGATION_MAIN_APP}
                component={MainAppNavigation}
                options={{headerShown: false}}
            />
        </StackNavigator.Navigator>
    )
})
export default RootNavigation
