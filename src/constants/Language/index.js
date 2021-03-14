/* eslint-disable quote-props */
import LocalizedStrings from 'react-native-localization';
import enCommon from './en';
import trCommon from './tr';

const selectableLanguage = [
  { value: 'tr', label: 'Türkçe' },
  { value: 'en', label: 'English' },
];

const Language = new LocalizedStrings({
    tr: {
        ...enCommon,
        ...trCommon,
        activeLanguage: 'Türkçe',
        activeLanguageCode: 'tr',
        displayDates: {
          long: 'DD MMM YYYY',
          sort: 'DD.MM.YYYY',
        },
      },
  en: {
    ...trCommon,
    ...enCommon,
    activeLanguage: 'English',
    activeLanguageCode: 'en',
    displayDates: {
      long: 'MMM DD YYYY',
      sort: 'MM/DD/YYYY',
    },
  },

});

export {
  Language as default,
  selectableLanguage,
};
