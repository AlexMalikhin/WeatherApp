import i18next from "i18next";
import {initReactI18next} from "react-i18next/hooks";
import I18NextHttpBackend from "i18next-http-backend";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

i18next
    .use(I18NextHttpBackend)
    .use(initReactI18next)
    .use(I18nextBrowserLanguageDetector)
    .init({
        fallbackLng: 'ru',
        whitelist: ['ru, en'],
        debug: true,
        detection: {
            order: ["localStorage", "cookie"],
            caches: ["localStorage", "cookie"]
        },
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    })

export default i18next;