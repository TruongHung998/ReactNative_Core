import React, {forwardRef, Ref, useImperativeHandle, useRef,} from 'react';
import {TextInput, TextInputProps} from 'react-native';
import {LIGHT_GRAY} from "@constants/color";
// @ts-ignore

const TEXT_BLACK_PLACE_HOLDER = '#828282';

export type TextInputComponentRefs = {
    focus: () => void;
    blur: () => void;
    isFocused: () => boolean;
    clear: () => void;
};

interface TextInputComponentProps {
    fontSize?: number,
    color?: string,
    textType?: 'regular' | 'bold' | 'light' | 'extra-light' | 'italic',
}

const TextInputCustomComponent = forwardRef(
    (props: TextInputProps & TextInputComponentProps & any, ref: Ref<TextInputComponentRefs>) => {
        const {
            autoCapitalize = 'none',
            autoCompleteType = 'off',
            autoCorrect = false,
            underlineColorAndroid = 'transparent',
            placeholderTextColor = TEXT_BLACK_PLACE_HOLDER,
            autoFocus = false,
            multiline = false,
            editable = true,
            fontSize = 14,
            color = "black",
            textType = "regular",
            style,
            ...restProps
        } = props;
        const _ref = useRef<TextInput>(null);
        useImperativeHandle(
            ref,
            () => {
                return {
                    focus: () => {
                        if (_ref.current) {
                            _ref.current.focus();
                        }
                    },
                    blur: () => {
                        if (_ref.current) {
                            _ref.current.blur();
                        }
                    },
                    isFocused: () => {
                        if (_ref.current) {
                            return _ref.current.isFocused();
                        }
                        return false;
                    },
                    clear: () => {
                        if (_ref.current) {
                            _ref.current.clear();
                        }
                    },
                };
            },
            [],
        );

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

        return (
            <TextInput
                ref={_ref}
                {...restProps}
                autoCapitalize={autoCapitalize}
                autoCompleteType={autoCompleteType}
                autoCorrect={autoCorrect}
                underlineColorAndroid={underlineColorAndroid}
                placeholderTextColor={placeholderTextColor}
                autoFocus={autoFocus}
                multiline={multiline}
                editable={editable}
                style={[{
                    ...textStyle,
                    fontSize: fontSize,
                    color: color
                }, style]}
            />
        );
    },
);

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

export default TextInputCustomComponent;
