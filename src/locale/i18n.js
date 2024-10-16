import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import {storage} from '../helpers'
import translation from './translation'

// 브라우저 언어 설정 가져오기
const browserLang = window.navigator.language.split('-')[0]

// localStorage에서 언어 설정 가져오기
const userLanguage = storage.get('lang') ?? browserLang

const resources = translation

i18n.use(initReactI18next).init({
  resources,
  lng: userLanguage,
  fallbackLng: 'kr',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    alwaysFormat: true,
    format(value, format, lng) {
      if (format === 'uppercase') return value.toUpperCase()
      // interpolation 되는 값이 number로 들어올 때, 언어 설정에 맞는 locale string으로 변환해서 반환
      if (typeof value === 'number') return value.toLocaleString(lng)
      return value
    },
  },
  react: {
    defaultTransParent: 'div',
    transEmptyNodeValue: '',
    transSupportBasicHtmlNodes: true,
    // <Trans> 컴포넌트 내부에 들어가는 html 태그들
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'button', 'a', 'span', 'div', 'input'],
    transWrapTextNodes: '',
  },
  nsSeparator: '=>', // default: ':', :가 번역 키에 포함되는 사례가 있어, 번역 키로 사용되지 않을 것 같은 seperator를 설정
})

export default i18n
