import React, {memo} from "react";
import {StackNavigator, TabNavigator} from "./index";
import {RoundTopCornerTabBar} from '../view/elements/bottomTabBar';
import {NAVIGATION_TAB_EXAMPLE1, NAVIGATION_TAB_EXAMPLE2, NAVIGATION_TAB_HOME} from "./routeName";
import TabHomeNavigation from "./tabHomeNavigation";
import TabExample1Navigation from "./tabExample1Navigation";
import TabExample2Navigation from "./tabExample2Navigation";

import {SCREENS} from "../constants/screen";


const BottomTabNavigation = memo(() => {
    return (
        <TabNavigator.Navigator
            tabBar={RoundTopCornerTabBar}
        >
            <StackNavigator.Screen
                name={NAVIGATION_TAB_HOME}
                component={TabHomeNavigation}
                options={({route}) => {
                    return {
                        tabBarVisible: getTabBarVisibility(route),
                        tabBarLabel: SCREENS.Home.description,
                        iconName: SCREENS.Home.iconName,
                        activeColor: SCREENS.Home.activeColor,
                        headerShown: false
                    }
                }}
            />
            <StackNavigator.Screen
                name={NAVIGATION_TAB_EXAMPLE1}
                component={TabExample1Navigation}
                options={({route}) => {
                    return {
                        tabBarVisible: getTabBarVisibility(route),
                        tabBarLabel: SCREENS.Example1.description,
                        iconName: SCREENS.Example1.iconName,
                        activeColor: SCREENS.Example1.activeColor,
                        headerShown: false
                    }
                }}
            />

            <StackNavigator.Screen
                name={NAVIGATION_TAB_EXAMPLE2}
                component={TabExample2Navigation}
                options={({route}) => {
                    return {
                        tabBarVisible: getTabBarVisibility(route),
                        tabBarLabel: SCREENS.Example2.description,
                        iconName: SCREENS.Example2.iconName,
                        activeColor: SCREENS.Example2.activeColor,
                        headerShown: false
                    }
                }}
            />
        </TabNavigator.Navigator>
    )
})
const getTabBarVisibility = (route) => {
    const routeName = route.state
        ? route.state.routes[route.state.index].name
        : '';
    if (
        routeName === 'ROUTE_EXAMPLE4'
    ) {
        return false;
    }
    return true;
}
export default BottomTabNavigation
