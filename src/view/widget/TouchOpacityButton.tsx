import React, {memo, useCallback} from "react";
import {StyleProp, StyleSheet, TouchableOpacity, TouchableOpacityProps, ViewStyle} from "react-native";
import {LAYOUT, TEXT} from "../../styles/global";

interface TouchOpacityButtonProps {
    borderRadius?: number,
    onPress?: (data?: any) => void,
    data?: any,
    children?: Element,
    activeOpacity?: number,
    disabled?: boolean,
    style?: StyleProp<ViewStyle>
}

const TouchOpacityButton = memo(({
                                     style,
                                     onPress,
                                     activeOpacity = 0.8,
                                     data,
                                     disabled = false,

                                     ...restProps
                                 }: TouchOpacityButtonProps & TouchableOpacityProps): JSX.Element => {
    const _onPress = useCallback(() => {
        onPress && onPress(data);
    }, [onPress, data]);

    return (
        <TouchableOpacity
            {...restProps}
            style={style}
            onPress={_onPress}
            activeOpacity={activeOpacity}
            disabled={disabled}
        />
    )
})
const styles = StyleSheet.create({
    container: {
        borderRadius: 30,
        ...LAYOUT.row_space_between
    },
    label: {
        ...TEXT.button_big,
        fontSize: 15,
    }
})
export default TouchOpacityButton
