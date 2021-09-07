import React, {memo} from "react";
import {SafeAreaView, StyleSheet, Text} from "react-native";
import BaseHeaderHome from "../elements/header/baseHeader";
import {COLOR_ORANGE} from "../../constants/color";

const HomePage2 = memo(() => {
    return <SafeAreaView style={styles.container}>
        <Text style={{fontSize: 30, textAlign: 'center', marginTop: 50, color: 'white'}}>
            Another Page 1
        </Text>
    </SafeAreaView>
})

const styles = StyleSheet.create({
    container: {backgroundColor: COLOR_ORANGE, flex: 1}
})
export default HomePage2
