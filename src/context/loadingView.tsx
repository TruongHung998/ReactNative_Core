import React, {memo, useEffect, useMemo, useState} from 'react'
import {Animated, Easing, StyleSheet, View} from 'react-native'

const ICON_LOADING = require('../assets/images/icon/loading.png')

interface LoadingViewProps {
    sizeOverLoading: number,
    durationLoading?: number,
    style?: any,
    isLoading: boolean,
    opacityDuration?: number
}

const LoadingView = memo(({
                              style,
                              sizeOverLoading = 22,
                              durationLoading = 1000,
                              isLoading,
                              opacityDuration = 500
                          }: LoadingViewProps) => {
    const [rotateValue] = useState(new Animated.Value(0))
    const [opacity] = useState(new Animated.Value(1))

    useEffect(() => {
        Animated.loop(
            Animated.timing(
                rotateValue, {
                    toValue: 1,
                    duration: durationLoading,
                    easing: Easing.linear,
                    useNativeDriver: true
                })
        ).start();
    }, []);

    useEffect(() => {
        if (isLoading === false) {
            Animated.timing(
                opacity, {
                    toValue: 0,
                    duration: opacityDuration,
                    easing: Easing.linear,
                    useNativeDriver: true
                }).start();
        }
    }, [isLoading])

    const _spin = useMemo(() => {
        return rotateValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '-360deg']
        })
    }, [rotateValue])

    return (
        <View style={[styles.container, style]}>
            <Animated.Image
                source={ICON_LOADING}
                style={[
                    {transform: [{rotate: _spin}], opacity: opacity},
                    {
                        width: sizeOverLoading,
                        height: sizeOverLoading,
                        // tintColor: 'red'
                    }
                ]}
                resizeMode={"contain"}
            />
        </View>
    )
})
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        justifyContent: "center",
        alignItems: "center"
    }
})


export default LoadingView
