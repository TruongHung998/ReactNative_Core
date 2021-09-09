/**
 * Author HungTruong239810
 *
 * */

// @ts-ignore
import React, {memo, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {LayoutAnimation, StatusBar, useColorScheme, View} from 'react-native';
import {persistStore} from "redux-persist";
import {Provider} from "react-redux";
import {AppContext, AppContextType} from "./context/appContext";
import {LoadingOverlay, LoadingOverlayRef} from "./context/loadingOverlay";
import AlertOverlay, {AlertOverlayProps} from "./context/alertOverlay";
import ModalBox, {ModalOverlayProps} from "./context/modalOverlay";
import {setNavigator} from "./utilities/navigationAction";
import store from './shared/redux/store/index';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import RootNavigation from "./navigators/rootNavigation";
import RNBootSplash from "react-native-bootsplash";

let reduxPersistStore;

const App = memo(() => {
    // -----Place to write variable--------

    const isDarkMode = useColorScheme() === 'dark';
    // @ts-ignore
    const navigationRef = useRef<any | null>(null);
    const _loadingRef = useRef<LoadingOverlayRef>(null);
    const sheetRef = useRef<any>(null);
    const alertRef = useRef<any>(null);

    const [optionAlert, setOptionAlert] = useState({})
    const [optionBottomTab, setBottomTab] = useState({})
    const [optionModal, setOptionModal] = useState({})
    const [dehydrated, setDehydrated] = useState(false);

    // -----DONT declare variable below this line--------

    // -----Place to write hook--------

    useEffect(() => {
        setNavigator(navigationRef)
        reduxPersistStore = persistStore(store, null, _onDehydrated);
    }, [])

    useEffect(() => {
        // const init = async () => {
        //     // …do multiple sync or async tasks
        // };
        //
        // init().finally(async () => {
        //     await RNBootSplash.hide({ fade: true });
        //     console.log("Bootsplash has been hidden successfully");
        // });
        setTimeout(() => {
            RNBootSplash.hide({fade: true});
        }, 1000)
    }, [])

    const _onDehydrated = useCallback(() => {
        setDehydrated(true);
        store.dispatch({type: 'START_APP'});
    }, []);

    const _onSetLoading = useCallback((loading, timeout) => {
        if (_loadingRef.current) {
            LayoutAnimation.easeInEaseOut();
            _loadingRef.current.setVisible(loading, timeout);
        }
    }, [_loadingRef]);

    const _showAlert = useCallback((option: AlertOverlayProps) => {
        if (alertRef.current) {
            LayoutAnimation.easeInEaseOut();
            alertRef?.current?.onOpen()
            setOptionAlert(option)
        }
        return () => {
            console.log('handle second call')
        }
    }, [optionAlert, setOptionAlert, alertRef]);

    const _dismissAlert = useCallback(() => {
        if (alertRef?.current) {
            LayoutAnimation.easeInEaseOut();
            alertRef?.current?.onDismiss()
        }
    }, [alertRef])

    const _showModal = useCallback((option: ModalOverlayProps) => {
        if (sheetRef.current) {
            LayoutAnimation.easeInEaseOut();
            sheetRef?.current?.onOpen()
            setOptionModal(option)
        }
    }, [optionModal, setOptionModal, sheetRef])

    const _dismissModal = useCallback(() => {
        if (sheetRef?.current) {
            LayoutAnimation.easeInEaseOut();
            sheetRef?.current?.onDismiss()
        }
    }, [sheetRef])

    const _appContextValue: AppContextType = useMemo(() => {
        return {
            setLoading: _onSetLoading,
            showAlert: _showAlert,
            showModal: _showModal,
            dismissModal: _dismissModal,
            dismissAlert: _dismissAlert,
        }
    }, [_onSetLoading]);


    // -----DONT write hook below this line--------

    // -----Render Component--------

    if (!dehydrated) {
        return (<View
            style={{flex: 1}}
        />);
    }

    return (
        <>
            <StatusBar
                backgroundColor="transparent"
                barStyle="dark-content"
            />
            <Provider store={store}>
                <AppContext.Provider value={_appContextValue}>
                    <NavigationContainer
                        ref={navigationRef}
                    >
                        <SafeAreaProvider>
                            <RootNavigation/>
                            <ModalBox ref={sheetRef} {...optionModal}/>
                            <AlertOverlay ref={alertRef} {...optionAlert}/>
                            <LoadingOverlay
                                ref={_loadingRef}
                            />
                        </SafeAreaProvider>
                    </NavigationContainer>
                </AppContext.Provider>
            </Provider>
        </>
    )
})


export default App;
