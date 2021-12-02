import {StackActions, CommonActions, TabActions, DrawerActions} from '@react-navigation/native';
import {NAVIGATION_MAIN_APP} from "../navigators/routeName";
import {LayoutAnimation} from "react-native";

const config: any = {};

export function setNavigator(navigationRef: any) {
    if (navigationRef) {
        config.navigator = navigationRef;
    }
}

export function navigateAction(routeName: string, params?: {} | any) {
    if (config.navigator && routeName && config.navigator.current) {
        LayoutAnimation.easeInEaseOut();
        config.navigator?.current?.navigate(routeName, params);
    }
}

export function pushAction(routeName: string, params?: {} | any) {
    if (config.navigator && routeName && config.navigator.current) {
        LayoutAnimation.easeInEaseOut();
        config.navigator?.current?.dispatch(StackActions.push(routeName, params));
    }
}

export function popAction(params?: {} | any) {
    if (config.navigator && config.navigator.current) {
        LayoutAnimation.easeInEaseOut();
        config.navigator?.current?.goBack()
    }
}

export function popToRootAction(params?: {} | any) {
    if (config.navigator && config.navigator.current) {
        LayoutAnimation.easeInEaseOut();
        config.navigator?.current?.navigate(NAVIGATION_MAIN_APP, params);
    }
}

export function resetStackAction(routeName: string, params?: {} | any) {
    if (config.navigator && routeName && config.navigator.current) {
        config.navigator.current.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{
                    name: routeName,
                    params
                }],
            })
        );
    }
}

export function jumpAction(routeName: string, params?: {} | any) {
    if (config.navigator && config.navigator.current) {
        const jumpToAction = TabActions.jumpTo(routeName, params);
        LayoutAnimation.easeInEaseOut();
        config.navigator?.current?.dispatch(jumpToAction)
    }
}

export function closeDrawer() {
    if (config.navigator && config.navigator.current) {
        LayoutAnimation.easeInEaseOut();
        config.navigator?.current?.dispatch(DrawerActions.closeDrawer());
    }
}
