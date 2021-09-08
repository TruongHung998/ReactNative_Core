import Config from '../config'
import DeviceInfo from 'react-native-device-info';

export default Object.freeze({
    getDomain: function () {
        switch (Config.ENV) {
            case 'ALPHA':
                return 'https://alpha.example.com.vn';
            case 'BETA':
                return 'https://beta.example.com.vn';
            case 'PRODUCTION':
                return 'https://example.com.vn';
            default:
                return '';
        }
    },
    getPrefixVersionAPI: function () {
        const {VERSION_API, SUB_VERSION_API} = Config
        return `v${VERSION_API}.${SUB_VERSION_API}/`;
    },
    isBunnyEarDevice: function () {
        let modelStr = DeviceInfo.getModel();
        if (Platform.OS == 'ios') {
            return modelStr && (modelStr.includes('X') || modelStr.includes('Max') || modelStr.includes('Pro') || modelStr.includes('11'))
        }
        return false
    },
})
