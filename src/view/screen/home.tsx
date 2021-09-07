import React, {memo} from "react";
import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import BaseHeaderHome from "../elements/header/baseHeader";
import TextInputAwareKeyboard from "../widget/TextInputAwareKeyboard";
import _const from "../../constants/common"
import LazyFastImage from "../widget/lazy_fast_image/lazy_fast_image";
import SkeletonPlaceholder from "react-native-skeleton-placeholder/lib/SkeletonPlaceholder";
import {COLOR_GREEN, COLOR_ORANGE, COLOR_PURPLE, COLOR_RED} from "../../constants/color";
import {hexAToRGBA} from "../../utilities/helper";
import {LAYOUT} from "../../constants/globalStyles";

const HomePage = memo(() => {
    return <SafeAreaView style={styles.container}>
        <BaseHeaderHome backgroundColor={'white'} title={'React Native Base'}/>

        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
        >
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
                marginVertical: 10,
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
                    }}/>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 15}}>
                <SkeletonPlaceholder backgroundColor={hexAToRGBA(COLOR_ORANGE, true)}
                                     highlightColor={hexAToRGBA(COLOR_RED, true)}>
                    <View style={{height: 80, width: 80, borderRadius: 15}}/>
                </SkeletonPlaceholder>
                <View>
                    <SkeletonPlaceholder backgroundColor={hexAToRGBA(COLOR_ORANGE, true)}
                                         highlightColor={hexAToRGBA(COLOR_RED, true)}>
                        <View style={{height: 35, width: 150, borderRadius: 15, marginLeft: 15}}/>
                    </SkeletonPlaceholder>
                    <SkeletonPlaceholder backgroundColor={hexAToRGBA(COLOR_ORANGE, true)}
                                         highlightColor={hexAToRGBA(COLOR_RED, true)}>
                        <View style={{height: 35, width: 150, borderRadius: 15, marginTop: 10, marginLeft: 15}}/>
                    </SkeletonPlaceholder>
                </View>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 15, marginTop: 15}}>
                <SkeletonPlaceholder backgroundColor={hexAToRGBA(COLOR_ORANGE, true)}
                                     highlightColor={hexAToRGBA(COLOR_RED, true)}>
                    <View style={{height: 80, width: 80, borderRadius: 15}}/>
                </SkeletonPlaceholder>
                <View>
                    <SkeletonPlaceholder backgroundColor={hexAToRGBA(COLOR_ORANGE, true)}
                                         highlightColor={hexAToRGBA(COLOR_RED, true)}>
                        <View style={{height: 35, width: 150, borderRadius: 15, marginLeft: 15}}/>
                    </SkeletonPlaceholder>
                    <SkeletonPlaceholder backgroundColor={hexAToRGBA(COLOR_ORANGE, true)}
                                         highlightColor={hexAToRGBA(COLOR_RED, true)}>
                        <View style={{height: 35, width: 150, borderRadius: 15, marginTop: 10, marginLeft: 15}}/>
                    </SkeletonPlaceholder>
                </View>
            </View>
            <View style={{height: 500}}/>
        </ScrollView>
    </SafeAreaView>
})

const styles = StyleSheet.create({
    container: {backgroundColor: 'white'}
})
export default HomePage
