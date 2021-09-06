import {StyleSheet, View} from "react-native";
import LoadingView from "./loadingView"
import React, {forwardRef, Ref, useImperativeHandle, useMemo, useState} from "react";
import _ from "lodash";

export type LoadingOverlayRef = {
    setVisible: (visible: boolean, timeout?: number) => void
}

const TIME_SEC = 1000;

export const LoadingOverlay = forwardRef((props, ref: Ref<LoadingOverlayRef>): JSX.Element | null => {
    const [visible, setVisible] = useState(false);
    const _variable = useMemo(() => {
        return {
            timeoutHandler: 0,
        }
    }, []);
    useImperativeHandle(ref, () => {
        return {
            setVisible: (_visible, _timout = TIME_SEC * 30) => {
                if (_variable.timeoutHandler) {
                    clearTimeout(_variable.timeoutHandler);
                    _variable.timeoutHandler = 0;
                }
                if (_visible && _timout) {
                    _variable.timeoutHandler = _.delay(() => {
                        setVisible(false);
                        _variable.timeoutHandler = 0;
                    }, _timout);
                }
                setVisible(_visible);
            }
        }
    }, [_variable, setVisible]);

    if (!visible) return null;
    return (
        // <View style={[commonStyles.fillFullCenterAll, { backgroundColor: BLACK_30 }]}>
        //     <ActivityIndicator
        //         color={'white'}
        //         size={"large"}
        //     />
        // </View>
        <View style={[styles.loading_container, {backgroundColor: 'rgba(0,0,0,0.3)'}]}>
            <LoadingView
                // @ts-ignore
                sizeOverLoading={70}
                isLoading={visible}/>
        </View>
    );
});

const styles = StyleSheet.create({
    loading_container: {
        position: 'absolute',
        backgroundColor: 'transparent',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100
    }
})
