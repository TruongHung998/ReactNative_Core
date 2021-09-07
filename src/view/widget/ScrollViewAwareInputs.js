import React, {createContext, memo, useCallback, useContext, useMemo} from 'react';
import PropTypes from 'prop-types';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'

const ScrollViewAwareInputs = memo((props) => {
    const {
        style,
        children,
        ...restProps
    } = props;
    const _variables = useMemo(() => {
        return {
            refArray: []
        }
    },[]);
    const _getTextInputRefs = useCallback(() => {
        return _variables.refArray.map((_ref) => {
            return _ref.current;
        });
    }, []);
    const _contextValue = useMemo(() => {
        return {
            registerTextInputRef: (textInputRef) => {
                _variables.refArray.push(textInputRef);
            },
            unregisterTextInputRef: (textInputRef) => {
                _variables.refArray = _variables.refArray.filter(_ref => {
                    return textInputRef !== _ref;
                });
            }
        }
    }, []);
    return (<KeyboardAwareScrollView
        {...restProps}
        style={style}
        getTextInputRefs={_getTextInputRefs}
    >
        <ScrollViewAwareInputs.ScrollViewAwareInputContext.Provider
            value={_contextValue}
        >
            {children}
        </ScrollViewAwareInputs.ScrollViewAwareInputContext.Provider>
    </KeyboardAwareScrollView>)
});
ScrollViewAwareInputs.ScrollViewAwareInputContext = createContext({
    registerTextInputRef: (textInputRef) => {

    },
    unregisterTextInputRef: (textInputRef) => {

    }
});
export const useScrollViewAwareInputContext = () => {
    return useContext(ScrollViewAwareInputs.ScrollViewAwareInputContext);
};
ScrollViewAwareInputs.propTypes = {
    children: PropTypes.any,
    contentContainerStyle: PropTypes.any,
    keyboardDismissMode: PropTypes.oneOf(['none', 'on-drag', 'interactive'])
};
ScrollViewAwareInputs.defaultProps = {
    keyboardDismissMode: 'on-drag'
};

export default ScrollViewAwareInputs;
