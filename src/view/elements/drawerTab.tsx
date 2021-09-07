import React, {memo} from "react";
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {FONT} from "../../constants/globalStyles";
import {SafeAreaBottom} from "../../constants/dimension";
import Config from "../../config";
import VersionNumber from 'react-native-version-number';


interface DrawerTabProps {
}

const DrawerTab = memo(({}: DrawerTabProps): JSX.Element => {

    const buildVersion = (Config.ENV !== 'PRODUCTION') ? ' (' + VersionNumber.buildVersion + ')' : ''
    const fullVersion = VersionNumber.appVersion + buildVersion


    return (
        <View style={styles.container}>
            <SafeAreaView/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scroll_view_style}
            >
                <Text style={styles.version}>
                    {'Version: ' + fullVersion} {Config.ENV !== 'PRODUCTION' && ' (TEST ENV)'}
                </Text>
            </ScrollView>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: 'transparent',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    scroll_view_style: {
        paddingHorizontal: 30,
        marginLeft: 20,
        marginBottom: SafeAreaBottom - 50
    },
    version: {
        ...FONT.normal,
        fontSize: 12,
        textAlign: 'center',
        marginTop: 20
    }
})
export default DrawerTab
