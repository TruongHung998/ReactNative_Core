import React, {memo} from "react";
import {DrawerNavigator, StackNavigator} from "./index";
import {NAVIGATION_BOTTOM_TAB} from "./routeName";
import BottomTabNavigation from "./bottomTabNavigation";
import DrawerTab from "../view/elements/drawer_tab";


const MainAppNavigation = memo(() => {
    return (
        <DrawerNavigator.Navigator
            initialRouteName={NAVIGATION_BOTTOM_TAB}
            drawerStyle={{width: '90%'}}
            drawerContent={(props) => <DrawerTab {...props} />}
        >
            <StackNavigator.Screen
                name={NAVIGATION_BOTTOM_TAB}
                component={BottomTabNavigation}
            />
        </DrawerNavigator.Navigator>
    )
})
export default MainAppNavigation
