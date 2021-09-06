import {Dimensions} from 'react-native';


//Where to store global variables
export default Object.freeze({
    SUCCESS: 1,
    FAILURE: 0,
    WIDTH_SCREEN: Dimensions.get('window').width,
    HEIGHT_SCREEN: Dimensions.get('window').height,
    HEIGHT_KEYBOARD_IOS: 350,
    HEIGHT_KEYBOARD_IOS_X: 400,
})

