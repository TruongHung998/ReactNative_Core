import React, {memo} from "react";
import {StackNavigator, TabNavigator} from "./index";
import {RoundTopCornerTabBar} from '../view/elements/bottom_tab_bar';
import {
    NAVIGATION_TAB_EXAMPLE1,
    NAVIGATION_TAB_EXAMPLE2,
    NAVIGATION_TAB_EXAMPLE3,
    NAVIGATION_TAB_HOME
} from "./routeName";
import TabHomeNavigation from "./tab_home_navigation";
import TabDietNavigation from "./tab_diet_navigation";
import TabRecipeNavigation from "./tab_recipe_navigation";

import TabForYouNavigation from "./for_you_navigation";

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
                        activeColor: SCREENS.Home.activeColor
                    }
                }}
            />
            <StackNavigator.Screen
                name={NAVIGATION_TAB_EXAMPLE1}
                component={TabDietNavigation}
                options={({route}) => {
                    return {
                        tabBarVisible: getTabBarVisibility(route),
                        tabBarLabel: SCREENS.Example1.description,
                        iconName: SCREENS.Example1.iconName,
                        activeColor: SCREENS.Example1.activeColor
                    }
                }}
            />

            <StackNavigator.Screen
                name={NAVIGATION_TAB_EXAMPLE2}
                component={TabForYouNavigation}
                options={({route}) => {
                    return {
                        tabBarVisible: getTabBarVisibility(route),
                        tabBarLabel: SCREENS.Example2.description,
                        iconName: SCREENS.Example2.iconName,
                        activeColor: SCREENS.Example2.activeColor
                    }
                }}
            />

            <StackNavigator.Screen
                name={NAVIGATION_TAB_EXAMPLE3}
                component={TabRecipeNavigation}
                options={({route}) => {
                    return {
                        tabBarVisible: getTabBarVisibility(route),
                        tabBarLabel: SCREENS.Example3.description,
                        iconName: SCREENS.Example3.iconName,
                        activeColor: SCREENS.Example3.activeColor
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
