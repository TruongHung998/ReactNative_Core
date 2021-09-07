import React, {memo} from "react";
import {View, Text, StyleSheet, StyleProp, ViewStyle} from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder/lib/SkeletonPlaceholder";
import {hexAToRGBA} from "../../utilities/helper";
import {COLOR_ORANGE, COLOR_RED} from "../../constants/color";

interface ExampleProps {
    width?: number,
    height?: number,
    color: string,
    hightlight: string,
    style?: StyleProp<ViewStyle>
}

const LoadingPlaceholder = memo(({width = 0, height = 0, color, hightlight, style}: ExampleProps): JSX.Element => {
    return (
        <SkeletonPlaceholder backgroundColor={color}
                             highlightColor={hightlight}>
            <View style={[{height: width, width: height}, style]}/>
        </SkeletonPlaceholder>
    )
})

export default LoadingPlaceholder
