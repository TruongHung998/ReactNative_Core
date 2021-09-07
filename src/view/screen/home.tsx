import React, {memo, useCallback} from "react";
import {LayoutAnimation, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import BaseHeaderHome from "../elements/header/baseHeader";
import TextInputAwareKeyboard from "../widget/TextInputAwareKeyboard";
import _const from "../../constants/common"
import LazyFastImage from "../widget/lazy_fast_image/lazy_fast_image";
import SkeletonPlaceholder from "react-native-skeleton-placeholder/lib/SkeletonPlaceholder";
import {COLOR_ORANGE, COLOR_RED} from "../../constants/color";
import {hexAToRGBA} from "../../utilities/helper";
import {LAYOUT} from "../../constants/globalStyles";
import LinearGradient from 'react-native-linear-gradient';
import TouchOpacityButton from "../widget/TouchOpacityButton";
import LoadingPlaceholder from "../widget/loadingPlaceholder";
import {useShowAlert, useShowModal} from "../../context/appContext";

const HomePage = memo(() => {
    const showModal = useShowModal()
    const useAlert = useShowAlert()

    const _onPressModal = useCallback(() => {
        LayoutAnimation.easeInEaseOut()
        showModal({
            childrenView: <View style={{flex: 1, backgroundColor: 'white'}}><Text
                style={{fontSize: 30, textAlign: 'center'}}>ModalBox</Text></View>,
            viewHeight: _const.HEIGHT_SCREEN * 0.7,
            isShowHeader: false
        })
    }, [])

    const _onPressAlert = useCallback(() => {


    }, [])
    return <SafeAreaView style={styles.container}>
        <BaseHeaderHome backgroundColor={'white'} title={'React Native Base'}/>

        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
        >
            <TouchOpacityButton onPress={_onPressModal}>
                <View style={{
                    height: 50,
                    width: 200,
                    backgroundColor: COLOR_RED,
                    borderRadius: 15,
                    justifyContent: 'center',
                    marginVertical: 10, marginLeft: 15
                }}>
                    <Text style={{textAlign: 'center', color: 'white'}}>Test ModalBox</Text>
                </View>
            </TouchOpacityButton>
            <TouchableOpacity onPress={_onPressAlert}>
                <View style={{
                    height: 50,
                    width: 200,
                    backgroundColor: COLOR_RED,
                    borderRadius: 15,
                    justifyContent: 'center',
                    marginVertical: 10, marginLeft: 15
                }}>
                    <Text style={{textAlign: 'center', color: 'white'}}>Test Alert</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{
                    height: 50,
                    width: 200,
                    backgroundColor: COLOR_RED,
                    borderRadius: 15,
                    justifyContent: 'center',
                    marginVertical: 10, marginLeft: 15
                }}>
                    <Text style={{textAlign: 'center', color: 'white'}}>Test Alert</Text>
                </View>
            </TouchableOpacity>
            <TextInputAwareKeyboard
                placeholder={'Mô tả bước'}
                placeholderTextColor={'#B0B0B0'}
                style={{
                    width: _const.WIDTH_SCREEN * 0.8,
                    height: 90,
                    paddingLeft: 15,
                    borderWidth: 1,
                    borderRadius: 15,
                    marginLeft: 15
                }} multiline={true}/>
            <View style={{
                alignSelf: 'center',
                borderRadius: 30,
                marginVertical: 25,
                ...LAYOUT.box_shadow_light,
                width: _const.WIDTH_SCREEN * 0.9,
                height: _const.HEIGHT_SCREEN * 0.3,
            }}>
                <LazyFastImage
                    source={{uri: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}}
                    style={{
                        flex: 1,
                        resizeMode: "cover",
                        justifyContent: "center",
                        borderRadius: 25
                    }} resizeMode={"cover"}/>
                <LinearGradient
                    style={styles.linear}
                    colors={["transparent", 'rgba(0,0,0,0.7)']}
                    locations={[0, 1]}/>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 15}}>
                <LoadingPlaceholder style={{height: 80, width: 80, borderRadius: 15}}
                                    color={hexAToRGBA(COLOR_ORANGE, true)} hightlight={hexAToRGBA(COLOR_RED, true)}/>
                <View>
                    <LoadingPlaceholder style={{height: 35, width: 150, borderRadius: 15, marginLeft: 15}}
                                        color={hexAToRGBA(COLOR_ORANGE, true)}
                                        hightlight={hexAToRGBA(COLOR_RED, true)}/>
                    <LoadingPlaceholder
                        style={{height: 35, width: 150, borderRadius: 15, marginLeft: 15, marginTop: 10}}
                        color={hexAToRGBA(COLOR_ORANGE, true)}
                        hightlight={hexAToRGBA(COLOR_RED, true)}/>
                </View>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 15, marginTop: 15}}>
                <LoadingPlaceholder style={{height: 80, width: 80, borderRadius: 15}}
                                    color={hexAToRGBA(COLOR_ORANGE, true)} hightlight={hexAToRGBA(COLOR_RED, true)}/>
                <View>
                    <LoadingPlaceholder style={{height: 35, width: 150, borderRadius: 15, marginLeft: 15}}
                                        color={hexAToRGBA(COLOR_ORANGE, true)}
                                        hightlight={hexAToRGBA(COLOR_RED, true)}/>
                    <LoadingPlaceholder
                        style={{height: 35, width: 150, borderRadius: 15, marginLeft: 15, marginTop: 10}}
                        color={hexAToRGBA(COLOR_ORANGE, true)}
                        hightlight={hexAToRGBA(COLOR_RED, true)}/>
                </View>
            </View>
            <View style={{height: 500}}/>
        </ScrollView>
    </SafeAreaView>
})

const styles = StyleSheet.create({
    container: {backgroundColor: 'white'},
    linear: {
        backgroundColor: "transparent",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: 25
    },
})
export default HomePage
