import React, {memo} from 'react'
import {Animated, StyleSheet, Text} from 'react-native'
import VectorIcon from "../../elements/vectorIcon";
import {ICON_NAME} from "../../../constants/iconName";
import {FONT} from "../../../constants/globalStyles";


interface EmptyImageProps {
    iconSize?: number,
    label?: string,
    emptyLabelStyle?: any,
    opacityAnim?: any
}

const EmptyImage = memo(({
                             iconSize = 70,
                             label = 'Chưa cập nhật',
                             emptyLabelStyle,
                             opacityAnim
                         }: EmptyImageProps) => {
    return (
        <Animated.View
            style={[
                styles.container,
                {opacity: opacityAnim}
            ]}>
            <VectorIcon
                name={ICON_NAME.ICON_HOME}
                size={iconSize}
                color={"#D7DBDD"}
            />
            <Text style={[
                styles.labelStyle,
                emptyLabelStyle
            ]}>
                {label}
            </Text>
        </Animated.View>
    )
})

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center"
    },
    labelStyle: {
        ...FONT.normal,
        marginTop: 5,
        fontSize: 15,
        color: "#A6ACAF"
    }
})

export default EmptyImage
