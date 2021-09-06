// @ts-ignore
import React, {forwardRef, Ref, useEffect, useImperativeHandle, useMemo, useState} from "react";
import {Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import _const from "../constants/common";
import {NAVIGATION_BAR_PADDING_H, SafeAreaBottom} from "../constants/dimension";
import {LAYOUT, FONT} from "../constants/globalStyles"

export interface AlertOverlayProps {
    visible?: boolean,
    animationType?: any,
    contentTitle?: string,
    buttons?: any[],
    message?: string,
}

export type AlertOverlayRef = {
    onOpen: () => void
}
const AlertOverlay = forwardRef(({visible = false, animationType = 'fade', contentTitle, message = '', buttons = []}: AlertOverlayProps, ref: Ref<AlertOverlayRef>): JSX.Element => {
    const [isShow, setIsShow] = useState(false)
    const [animation, setAnimation] = useState('fade')
    useImperativeHandle(ref, () => {
        return {
            onOpen: () => {
                setIsShow(true)
            }
        }
    })

    useEffect(() => {
        setAnimation(animationType || 'fade')
    }, [animationType])
    const renderButton = useMemo(() => {
        if (buttons && buttons.length > 0) {
            return buttons.map((item, index) => {
                return <TouchableOpacity style={{
                    backgroundColor: item.active ? '#DF8C26' : '#B0B0B0',
                    borderRadius: 30, ...LAYOUT.box_shadow_light,
                    alignItems: 'center', justifyContent: 'center',
                    width: 120,
                    height: 40,
                    alignSelf: 'center',
                    marginLeft: index !== 0 ? 20 : 0
                }} onPress={item.onPress ? () => {
                    setIsShow(false)
                    item.onPress()
                } : () => {
                    setIsShow(false)
                }}>
                    <Text numberOfLines={1} style={{color: item.active ? 'white' : 'black'}}>
                        {item.label}
                    </Text>
                </TouchableOpacity>
            })
        }
    }, [buttons])
    return (
        <View style={styles.container_modal}>
            <Modal
                // @ts-ignore
                animationType={animation}
                transparent={true}
                visible={isShow}
            >
                <View style={styles.modal_position}>
                    <View style={styles.modal_view}>
                        <Text style={{
                            fontSize: 20
                        }}>{contentTitle}</Text>
                        <Text style={{
                            fontSize: 16,
                            marginTop: 10
                        }}>{message}</Text>
                        <View style={{
                            flexDirection: buttons && buttons.length > 1 ? 'row' : 'column',
                            width: _const.WIDTH_SCREEN * 0.7,
                            marginTop: 10,
                            alignSelf: 'center',
                        }}>
                            {renderButton}
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
})
const styles = StyleSheet.create({
    container_modal: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    modal_position: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modal_view: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        width: _const.WIDTH_SCREEN * 0.9,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button_close: {
        position: 'absolute',
        top: -40,
        right: -20,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#DF8C26',
        justifyContent: "center",
        alignItems: "center",
        ...LAYOUT.box_shadow,
        marginTop: 20
    }
})

export default AlertOverlay
