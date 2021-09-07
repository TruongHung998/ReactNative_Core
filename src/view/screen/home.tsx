import React, {memo} from "react";
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import BaseHeaderHome from "../elements/header/baseHeader";

const HomePage = memo(() => {
    return <SafeAreaView style={styles.container}>
        <BaseHeaderHome backgroundColor={'white'} title={'React Native'}/>
        <Text>
            any
        </Text>
    </SafeAreaView>
})

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: 'white'}
})
export default HomePage
