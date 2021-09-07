import React, {memo} from "react";
import {StyleSheet, Text, View} from "react-native";

const HomePage = memo(() => {
    return <View style={styles.container}>
        <Text>
            hung
        </Text>
    </View>
})

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: 'white'}
})
export default HomePage
