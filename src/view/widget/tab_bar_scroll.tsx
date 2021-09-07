import React, {forwardRef, memo, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState} from "react";
import {
    LayoutAnimation,
    PixelRatio,
    ScrollView,
    StyleProp,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewStyle
} from "react-native";
import ScrollableTabView, {TabBarProps} from "react-native-scrollable-tab-view";
import _const from '../../constants/common'
import {FONT} from "../../constants/globalStyles";

interface TabBarScrollProps {
    content: Item[],
    style?: StyleProp<ViewStyle>,
    locked?: boolean,
    initPage?: number,
    ref?: any
}

interface Item {
    content: Element,
    label: string
}

// add view array to render children component
// will do later commmit
const TabBarScroll = forwardRef(({content = [], style, locked = true, initPage = 0}: TabBarScrollProps, ref: any): JSX.Element => {
    // ATTENTION!!! add props tabLabel="somthing" to Element to render header tab
    const refScroll = useRef<any>()
    const renderContent = useCallback(() => {
        return content.map((item: Item) => {
            // @ts-ignore
            return <View tabLabel={item.label}>
                {item.content}
            </View>
        })
    }, [content])

    useImperativeHandle(ref, () => {
        return {
            goToPage: (index: any) => {
                if (refScroll.current)
                    refScroll.current.goToPage(index)
            },
        }
    }, [])

    const [size, setSize] = useState({
        width: 0,
        height: 0,
    });

    const _onLayout = useCallback(event => {
        const _w = event.nativeEvent.layout.width;
        const _h = event.nativeEvent.layout.height;
        if (_w !== size.width || _h !== size.height) {
            setSize({
                width: _w,
                height: _h,
            });
        }
    }, [size]);

    return (
        <View style={[style]} onLayout={_onLayout}>
            <ScrollableTabView
                initialPage={initPage}
                renderTabBar={(props) => <CustomTabBar  {...props} initPage={initPage} width={size.width}/>}
                locked={locked} style={style}
                ref={refScroll}
            >
                {renderContent()}
            </ScrollableTabView>
            <View/>
        </View>
    )
})


//CustomTabBar
const CustomTabBar = memo((props: any, {width}) => {
        const _scrollViewRef = useRef(null)
        const [size, setSize] = useState({
            width: 0,
            height: 0,
        });
        const {activeTab} = props
        const length = props?.tabs?.length || 0

        useEffect(() => {
            if (props?.initPage != null || props?.initPage != undefined) {
                if (_scrollViewRef?.current) {
                    const ratio = Math.floor(props?.initPage / RatioScreen) + 1
                    LayoutAnimation.easeInEaseOut();
                    // @ts-ignore
                    _scrollViewRef?.current?.scrollTo({
                        x: ((ratio - 1) * _const.WIDTH_SCREEN * 0.8),
                        y: 0,
                        animated: true
                    })
                }
                LayoutAnimation.easeInEaseOut();
                props?.goToPage && props?.goToPage(props?.initPage)
            }
        }, [props?.initPage])

        const RatioScreen = useMemo(() => {
            if (length && size) {
                return Math.floor(_const.WIDTH_SCREEN / size.width)
            } else return 1
        }, [length, size])

        //User Slide Tab On View
        useEffect(() => {
            if (_scrollViewRef?.current && activeTab != null) {
                const ratio = Math.floor(activeTab / RatioScreen) + 1
                LayoutAnimation.easeInEaseOut();
                // @ts-ignore
                _scrollViewRef?.current?.scrollTo({
                    x: ((ratio - 1) * _const.WIDTH_SCREEN * 0.8),
                    y: 0,
                    animated: true
                })
            }
        }, [activeTab, RatioScreen])


        //User Tab on Header
        const onNavigationTab = useCallback((index: number, props: TabBarProps) => {
            if (_scrollViewRef?.current) {
                const ratio = Math.floor(index / RatioScreen) + 1
                LayoutAnimation.easeInEaseOut();
                // @ts-ignore
                _scrollViewRef?.current?.scrollTo({
                    x: ((ratio - 1) * _const.WIDTH_SCREEN * 0.8),
                    y: 0,
                    animated: true
                })
            }
            LayoutAnimation.easeInEaseOut();
            props?.goToPage && props?.goToPage(index)
        }, [RatioScreen])


        const _onLayout = useCallback(event => {
            const _w = event.nativeEvent.layout.width;
            const _h = event.nativeEvent.layout.height;
            if (_w !== size.width || _h !== size.height) {
                setSize({
                    width: _w,
                    height: _h,
                });
            }
        }, [size]);

        const renderTabBar = useCallback(() => {
            return props?.tabs?.map((item: any, index: any) => {
                return <View onLayout={_onLayout}>
                    <TouchableOpacity style={styles.tabbar_button}
                                      onPress={() => onNavigationTab(index, props)}>
                        <Text
                            style={[styles.tabbar_text,
                                {color: index === props.activeTab ? 'black' : '#B0B0B0'}]}>
                            {item}
                        </Text>
                    </TouchableOpacity>
                </View>
            })
        }, [props])

        return <View style={{width: width, height: 60, overflow: 'hidden'}}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                ref={_scrollViewRef}
            >
                {renderTabBar()}
            </ScrollView>
        </View>
    }
)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    label: {
        ...FONT.normal,
        fontSize: PixelRatio.get() <= 2 ? 30 : 28
    },
    tabbar_text: {
        ...FONT.normal,
        fontSize: PixelRatio.get() <= 2 ? 25 : 23,
    },
    tabbar_button: {
        height: 60,
        marginHorizontal: 10,
    }
})
export default TabBarScroll
