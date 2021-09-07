import React, {memo} from "react";
import {View, Text, Image} from "react-native";

interface VectorIconProps {
    name: {
        isImage?: boolean,
        icon_name: string | any
    },
    size?: number,
    color?: string | any,
    style?: {} | any
}

const VectorIcon = memo(({name = {icon_name: ''}, size = 24, color, style}: VectorIconProps): JSX.Element => {
    return (
        <Image
            resizeMode={"contain"}
            style={[{width: size, height: size, tintColor: color}, style]}
            source={name?.icon_name}/>
    )
})

interface CircleIconProps {
    name: {
        isImage?: boolean,
        icon_name: string | any
    },
    size?: number,
    tintColor?: string | any,
    backgroundColor?: string | any,
    style?: {} | any,
    isBlur?: boolean | any
}

const CircleIcon = memo(({name = {icon_name: ''}, size = 24, tintColor, backgroundColor, style, isBlur}: CircleIconProps): JSX.Element => {
    return (
        <View style={[{
            width: size * 1.8,
            height: size * 1.8,
            borderRadius: size * 1.8 / 2,
            backgroundColor: backgroundColor,
            alignItems: 'center',
            justifyContent: 'center'
        }, style]}>
            <Image
                resizeMode={"contain"}
                style={[{width: size, height: size, tintColor: tintColor}]}
                source={name?.icon_name}/>
            {isBlur && < View style={{
                flex: 1,
                position: 'absolute',
                left: 0,
                top: 0,
                opacity: 0.7,
                backgroundColor: 'white',
                width: size * 1.8,
                height: size * 1.8,
                borderRadius: size * 1.8 / 2,
            }}/>}
        </View>
    )
})

export {CircleIcon}
export default VectorIcon
