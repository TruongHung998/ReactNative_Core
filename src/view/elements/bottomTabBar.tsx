import React, {memo} from "react";
import {LayoutAnimation, PixelRatio, Platform, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import _const from '../../constants/common'
import VectorIcon from "./vectorIcon";
import {BottomBarHeight} from "../../constants/dimension";
import utils from '../../utilities/utils'
import {LAYOUT, FONT} from "../../constants/globalStyles";
import {hexAToRGBA} from "../../utilities/helper";

interface BottomTabBarProps {
    state: any,
    descriptors: any,
    navigation: any
}

export const RoundTopCornerTabBar = (props: any) => {
    const {descriptors, state} = props
    const focusedOptions = descriptors[state.routes[state.index].key].options;
    if (focusedOptions.tabBarVisible === false) {
        LayoutAnimation.easeInEaseOut()
        return null;
    }
    return (
        <View
            style={styles.container_bottom_tab}
        >
            <View
                style={{
                    width: _const.WIDTH_SCREEN * 0.95,
                    height: 80,
                    backgroundColor: 'white',
                    ...LAYOUT.box_shadow,
                    alignSelf: 'center',
                    borderRadius: 15
                }}
            >
                <BottomTabBar {...props} />
            </View>
        </View>
    )
}

const BottomTabBar = memo(({state, descriptors, navigation}: BottomTabBarProps): JSX.Element | null => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;
    if (focusedOptions.tabBarVisible === false) {
        return null;
    }
    return (
        <View style={styles.container}>
            {state.routes.map((route: any, index: any) => {
                const {options} = descriptors[route.key];
                const visible = options?.tabBarVisible
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;
                const iconName = options?.iconName
                const activeColor = options?.activeColor
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? {selected: true} : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={[styles.main_button, {backgroundColor: isFocused ? hexAToRGBA(activeColor, true) : 'white'}]}
                        key={index + ''}
                    >
                        <VectorIcon name={iconName} style={styles.icon_view}
                                    color={isFocused ? activeColor : '#B0B0B0'}/>
                        <Text style={[{
                            color: isFocused ? activeColor : '#B0B0B0',
                            fontWeight: isFocused ? 'bold' : '400'
                        }, styles.label_style]}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>

    );
})


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: -7,
        paddingBottom: 7,
        marginRight: 3,
        justifyContent: 'center'
    },
    main_button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        height: 65,
        width: _const.WIDTH_SCREEN * 0.28,
        borderRadius: 15
    },
    container_bottom_tab: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: Platform.OS === 'ios' ? utils.isBunnyEarDevice() ? 30 : 20 : 20,
    },
    icon_view: {
        width: _const.WIDTH_SCREEN * 0.06,
        height: _const.WIDTH_SCREEN * 0.06,
        marginBottom: 5
    },
    label_style: {
        ...FONT.normal,
        textTransform: 'none',
        fontSize: PixelRatio.get() <= 2 ? 12 : 10,
    },
    image_background: {
        width: _const.WIDTH_SCREEN,
        height: _const.HEIGHT_SCREEN * 0.1,
    },
    add_button: {
        width: _const.WIDTH_SCREEN * 0.12,
        height: _const.WIDTH_SCREEN * 0.12,
        borderRadius: _const.WIDTH_SCREEN * 0.2 / 2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: Platform.select({
            ios: utils.isBunnyEarDevice() ? 7 : 2,
            android: 2
        }),
        right: Platform.select({
            ios: utils.isBunnyEarDevice() ? _const.HEIGHT_SCREEN * 0.027 : _const.WIDTH_SCREEN * 0.055,
            android: _const.WIDTH_SCREEN * 0.055
        })
    },
    safe_area: {
        width: '100%',
        height: BottomBarHeight - 5,
        backgroundColor: 'white'
    },
})

