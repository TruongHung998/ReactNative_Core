import React, {
    forwardRef,
    Ref,
    useEffect,
    useImperativeHandle,
    useRef,
} from 'react';
import {TextInput, TextInputProps} from 'react-native';
import {useScrollViewAwareInputContext} from './ScrollViewAwareInputs';

const TEXT_BLACK_PLACE_HOLDER = '#828282';
export type TextInputAwareKeyboardRef = {
    focus: () => void;
    blur: () => void;
    isFocused: () => boolean;
    clear: () => void;
};
const TextInputAwareKeyboard = forwardRef(
    (props: TextInputProps, ref: Ref<TextInputAwareKeyboardRef>) => {
        const {
            autoCapitalize = 'none',
            autoCompleteType = 'off',
            autoCorrect = false,
            underlineColorAndroid = 'transparent',
            placeholderTextColor = TEXT_BLACK_PLACE_HOLDER,
            autoFocus = false,
            multiline = false,
            editable = true,
            ...restProps
        } = props;
        const _scrollViewContext = useScrollViewAwareInputContext();
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
        useEffect(() => {
            if (_scrollViewContext && _scrollViewContext.registerTextInputRef) {
                _scrollViewContext.registerTextInputRef(_ref);
            }
            return () => {
                if (_scrollViewContext && _scrollViewContext.unregisterTextInputRef) {
                    _scrollViewContext.unregisterTextInputRef(_ref);
                }
            };
        }, [_scrollViewContext]);
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
            />
        );
    },
);
export default TextInputAwareKeyboard;
