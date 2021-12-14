import React, {memo} from "react";
import {PixelRatio, StyleProp, Text, TextProps, TextStyle} from "react-native";

interface TextComponentProps {
    children?: Element | string,
    style?: StyleProp<TextStyle>
    textType?: 'regular' | 'bold' | 'light' | 'extra-light' | 'italic',
    fontSize?: number,
    color?: string
}

const TextCustomComponent = memo(({
                                      style,
                                      textType = 'regular',
                                      fontSize = 15,
                                      color = 'black',
                                      ...restProps
                                  }: TextComponentProps & TextProps): JSX.Element => {
    let textStyle: {}
    switch (textType) {
        case 'regular':
            textStyle = styles.regular
            break
        case 'bold':
            textStyle = styles.bold
            break
        case 'light':
            textStyle = styles.light
            break
        case 'extra-light':
            textStyle = styles.extra_light
            break
        case 'italic':
            textStyle = styles.italic
            break
        default:
            textStyle = styles.regular
            break
    }

    textStyle = {
        ...textStyle,
        fontSize: PixelRatio.get() <= 2 ? fontSize : fontSize - 2,
        color: color
    }

    return (
        <Text numberOfLines={1}
              {...restProps}
              style={[textStyle, style]}
        />
    )
})

const styles = {
    regular: {
        fontFamily: 'Nunito-Regular'
    },
    bold: {
        fontFamily: 'Nunito-Bold'
    },
    light: {
        fontFamily: 'Nunito-Light'
    },
    extra_light: {
        fontFamily: 'Nunito-ExtraLight'
    },
    italic: {
        fontFamily: 'Nunito-italic'
    }
}
export default TextCustomComponent
