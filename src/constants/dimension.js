import utils from "../utilities/utils";
import {Platform, StatusBar} from 'react-native';

export const NAVIGATION_BAR_PADDING_H = 8;
export const HEIGHT_NAVIGATION_BAR = 50
export const TabBarHeight = 57
export const BottomBarHeight = Platform.select({
    ios: utils.isBunnyEarDevice() ? 44 : 0,
    android: 20,
    default: 0
})
export const getStatusBarHeight = () => {
    return Platform.OS === 'ios' ? 0 : Number(StatusBar.currentHeight)
}
export const SafeAreaBottom = TabBarHeight + BottomBarHeight
