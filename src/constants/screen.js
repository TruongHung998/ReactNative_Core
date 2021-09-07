/**
 * Define screen names as constants here
 */

import {ICON_NAME} from "./iconName";
import {COLOR_GREEN, COLOR_ORANGE, COLOR_RED} from "./color";

const SCREENS = {
    Home: {
        name: 'Home',
        description: 'Home Page',
        activeColor: COLOR_RED,
        iconName: ICON_NAME.ICON_HOME
    },
    Example1: {
        name: 'Example1',
        description: 'Another Page 1',
        activeColor: COLOR_ORANGE,
        iconName: ICON_NAME.ICON_HOME
    },
    Example2: {
        name: 'Example1',
        description: 'Another Page 2',
        activeColor: COLOR_GREEN,
        iconName: ICON_NAME.ICON_HOME
    },
};

export {SCREENS};
