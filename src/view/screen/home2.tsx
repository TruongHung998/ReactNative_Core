import React, {memo} from "react";
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import {COLOR_ORANGE} from "../../constants/color";
import TabBarScroll from "../widget/tab_bar_scroll";
import _const from '../../constants/common'

const HomePage2 = memo(() => {
    let contentArray = []
    contentArray.push({
        content: <View><Text>View1</Text></View>,
        label: 'View1'
    })

    contentArray.push({
        content: <View><Text>View2</Text></View>,
        label: 'View2'
    })
    contentArray.push({
        content: <View><Text>View3</Text></View>,
        label: 'View3'
    })
    return <SafeAreaView style={styles.container}>
        <Text style={{fontSize: 30, textAlign: 'center', marginTop: 50, color: 'white'}}>
            Another Page 1
        </Text>
        <View style={{backgroundColor: 'white', marginTop: 20}}>
            <TabBarScroll content={contentArray} locked={false} initPage={0}
                          style={{
                              height: _const.HEIGHT_SCREEN * 0.6,
                              width: _const.WIDTH_SCREEN * 0.9,
                              alignSelf: 'center',
                          }}
            />
        </View>
    </SafeAreaView>
})

const styles = StyleSheet.create({
    container: {backgroundColor: COLOR_ORANGE, flex: 1}
})
export default HomePage2
