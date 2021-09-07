import React, {memo, useCallback} from "react";
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from "react-native";
import {HEIGHT_NAVIGATION_BAR} from '../../../constants/dimension'
import VectorIcon from "../vectorIcon";
import {useNavigation} from '@react-navigation/native'
import {ICON_NAME} from "../../../constants/iconName";

interface BaseHeaderHomeProps {
    backgroundColor: string,
    title: string
}

const BaseHeaderHome = memo(({backgroundColor, title}: BaseHeaderHomeProps): JSX.Element => {
    const _navigation: any = useNavigation();
    const _onPress = useCallback((): void => {
        _navigation.openDrawer();
    }, [_navigation]);
    return (
        <View style={{backgroundColor: backgroundColor}}>
            <SafeAreaView>
                <View style={styles.container}>
                    <TouchableOpacity onPress={_onPress}>
                        <VectorIcon name={ICON_NAME.OPTION} size={45}/>
                    </TouchableOpacity>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </SafeAreaView>
        </View>
    )
})
const styles = StyleSheet.create({
    container: {
        height: HEIGHT_NAVIGATION_BAR,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 17,
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 20
    }
})
export default BaseHeaderHome
