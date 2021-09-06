// @ts-ignore
import React, {forwardRef, Ref, useCallback, useImperativeHandle, useRef, useState} from "react";
import {LayoutAnimation, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import BottomSheetBehavior from 'reanimated-bottom-sheet';
import _const from '../constants/common'
import {LAYOUT, FONT} from "../constants/globalStyles";
import Animated from "react-native-reanimated";

export interface ModalOverlayProps {
    childrenView?: JSX.Element | null,
    viewHeight?: number,
    isShowHeader?: boolean
}

export type ModalOverlayRef = {
    onOpen: () => void
}

const ModalBox = forwardRef(({
                                 childrenView = null,
                                 viewHeight = _const.HEIGHT_SCREEN * 0.7,
                                 isShowHeader = true
                             }: ModalOverlayProps, ref: Ref<ModalOverlayRef>): JSX.Element => {
        const snapPoints = [viewHeight, 0]
        const [isShowLayout, setIsShowLayout] = useState(false)
        const onFullScreen = useCallback(() => {
            setIsShowLayout(true)
            LayoutAnimation.easeInEaseOut();
        }, []);
        const onScreen = useCallback(() => {
            setIsShowLayout(false)
            LayoutAnimation.easeInEaseOut();
        }, []);
        const sheetRef = useRef<BottomSheetBehavior>(null);

        const onClose = () => {
            if (sheetRef.current) {
                LayoutAnimation.easeInEaseOut();
                sheetRef.current.snapTo(snapPoints.length - 1)
                setIsShowLayout(false)
            }
        }
        useImperativeHandle(ref, () => {
            return {
                onOpen: () => {
                    if (sheetRef.current) {
                        LayoutAnimation.easeInEaseOut();
                        setIsShowLayout(true)
                        sheetRef.current.snapTo(0)
                    }
                },
                onDismiss: () => {
                    if (sheetRef.current) {
                        LayoutAnimation.easeInEaseOut();
                        sheetRef.current.snapTo(snapPoints.length - 1)
                        setIsShowLayout(false)
                    }
                }
            }

        })

        // Callbacknode use when make component smooth
        // const callbackNode = useRef(new Animated.Value(0)).current;
        // Animated.useCode(() => Animated.onChange(
        //     callbackNode,
        //     Animated.block([
        //         Animated.cond(
        //             Animated.eq(callbackNode, 0),
        //             Animated.call([], () => {
        //                 onFullScreen && onFullScreen();
        //             })
        //         ),
        //         Animated.cond(
        //             Animated.eq(callbackNode, 1),
        //             Animated.call([], () => {
        //                 onScreen && onScreen();
        //             })
        //         ),
        //     ])
        // ), [onFullScreen]);
        const renderContent = useCallback(() => {
            return (
                <View
                    style={{height: viewHeight}}
                >
                    {childrenView}
                </View>
            )
        }, [childrenView, viewHeight])

        const renderHeader = useCallback(() => {
            return <View>
                {isShowHeader && <View style={styles.container_header}>
                </View>}
            </View>
        }, [isShowHeader])

        return (
            <>
                {isShowLayout && <TouchableWithoutFeedback onPress={() => onClose()}>
                    <Animated.View
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            flex: 1,
                            backgroundColor: '#000',
                            opacity: 0.5,
                        }}
                    />
                </TouchableWithoutFeedback>}
                <BottomSheet
                    ref={sheetRef}
                    snapPoints={[viewHeight, 0]}
                    renderHeader={renderHeader}
                    renderContent={renderContent}
                    initialSnap={1}
                    enabledContentGestureInteraction={false}
                    // callbackNode={callbackNode}
                />
            </>
        );
    }
)

const styles = StyleSheet.create({
    container_header: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 25,
        backgroundColor: 'white',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        ...LAYOUT.shadow_top
    },
    label_style: {
        ...FONT.normal,
        fontSize: 20
    }
})
export default ModalBox
