import {Platform, StyleSheet} from 'react-native';

import {NAVIGATION_BAR_PADDING_H, SafeAreaBottom} from "./dimension";

export const LAYOUT = StyleSheet.create({
    fillFull: {
        position: 'absolute',
        backgroundColor: 'transparent',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    headerLeftContainerStyle: {
        paddingHorizontal: 0,
        paddingVertical: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginHorizontal: 0,
        marginVertical: 0,
        marginLeft: 0,
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: NAVIGATION_BAR_PADDING_H,
        marginRight: 0,
    },
    pageContainer: {
        padding: 16,
    },
    shadow: {
        shadowOpacity: 0.25,
        shadowRadius: 3,
        shadowOffset: {width: 3, height: 3},
        elevation: Platform.OS === 'ios' ? 0 : 3,
    },
    box_shadow: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    box_shadow_light: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    shadow_drawer: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    shadow_top: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: -5,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 3,
    },
    shadow_bottom: {
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
    },
    row_space_between: {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'},
    padding_view: {
        flex: 1,
        paddingBottom: SafeAreaBottom
    },
    main_container: {
        flex: 1,
        backgroundColor: 'white'
    },
});

export const FONT = StyleSheet.create({
    normal: {
        fontWeight: "600",
        fontStyle: 'normal',
        textTransform: 'none',
    },
});


