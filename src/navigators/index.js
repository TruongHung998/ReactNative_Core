import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from "@react-navigation/stack";


export const StackNavigator =  createStackNavigator()
export const TabNavigator = createBottomTabNavigator();
export const DrawerNavigator = createDrawerNavigator();
