import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import id from './locales/id/translation.json';
import en from './locales/en/translation.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {id: {translation: id}, en: {translation: en}},
        fallbaclLng: 'id',
        interpolation: {escapeValue: false}
    });

export default i18n;