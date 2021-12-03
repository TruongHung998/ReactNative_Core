import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

const languageDetector: any = {
    type: 'languageDetector',
    async: true,
    detect: (cb: any) => cb('vi'),
    init: () => {
    },
    cacheUserLanguage: () => {
    },
};

i18next
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'vi',
        debug: false,
        resources: {
            vi: {translation: require('./vi')},
            en: {translation: require('./en')},
        },
    });

export default i18next;
