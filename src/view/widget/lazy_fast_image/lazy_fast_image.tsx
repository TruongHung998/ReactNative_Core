import React, {memo, useCallback, useEffect, useState} from 'react'
import {Animated, Easing, StyleSheet, View} from 'react-native'
import FastImage from 'react-native-fast-image'
import {isBlank} from "../../../utilities/helper";
import EmptyImage from "./empty_image";
import SkeletonPlaceholder from "react-native-skeleton-placeholder/lib/SkeletonPlaceholder";


const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);

interface LazyFastImageProps {
    source: any,
    style?: any,
    resizeMode?: "center" | "contain" | "stretch" | "cover",
    iconSize?: number,
    label?: string,
    durationLoading?: number,
    sizeOverLoading?: number,
    loadingStyle?: any,
    opacityDuration?: number,
    emptyLabelStyle?: any
}

const LazyFastImage = memo(({
                                style,
                                source,
                                resizeMode = "contain",
                                iconSize = 40,
                                label = 'Chưa cập nhật',
                                durationLoading = 1000,
                                sizeOverLoading = 30,
                                loadingStyle,
                                opacityDuration = 500,
                                emptyLabelStyle,
                            }: LazyFastImageProps) => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [opacityImage] = useState(new Animated.Value(0))

    const _onStartLoad = useCallback(() => {
        // setIsLoading(true)
        // setIsError(false)
    }, [])

    const _onLoadEnd = useCallback(() => {
        Animated.timing(
            opacityImage, {
                toValue: 1,
                duration: opacityDuration,
                easing: Easing.linear,
                useNativeDriver: true
            }).start();
        setIsLoading(false)
    }, [])

    const _onError = useCallback(() => {
        setIsError(true)
        setIsLoading(false)
        Animated.timing(
            opacityImage, {
                toValue: 1,
                duration: opacityDuration,
                easing: Easing.linear,
                useNativeDriver: true
            }).start();
    }, [])


    useEffect(() => {
        if (source && isBlank(source.uri)) {
            setIsError(true)
            setIsLoading(false)
            Animated.timing(
                opacityImage, {
                    toValue: 1,
                    duration: opacityDuration,
                    easing: Easing.linear,
                    useNativeDriver: true
                }).start();
        }
    }, [source])

    return (
        <View style={style}>
            {isError ?
                <EmptyImage
                    opacityAnim={opacityImage}
                    iconSize={iconSize}
                    label={label}
                    emptyLabelStyle={emptyLabelStyle}
                />
                :
                <AnimatedFastImage
                    style={[style, {opacity: opacityImage}]}
                    source={source}
                    resizeMode={resizeMode}
                    onLoad={_onStartLoad}
                    onLoadEnd={_onLoadEnd}
                    onError={_onError}
                />
            }
            {isLoading && <SkeletonPlaceholder>
                <View style={{width: '100%', height: '100%', borderRadius: 30}}/>
            </SkeletonPlaceholder>}
        </View>
    )
})

const styles = StyleSheet.create({
    imageOverlay: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    },
    container: {
        justifyContent: 'center',
        alignItems: "center",
    },
})


export default LazyFastImage
