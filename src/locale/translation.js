import {keys, map} from 'lodash-es'
import {} from './resources'

const translation = () => {
  const data = {}
  const keyList = keys(data)

  const convertData = {}
  map(keyList, (key) => {
    const item = data[key]
    const langs = keys(item)
    map(langs, (lang) => {
      const before = convertData[lang]
      if (before) {
        convertData[lang].translation[key] = item[lang]
      } else {
        convertData[lang] = {
          translation: {
            [key]: item[lang],
          },
        }
      }
    })
  })

  return convertData
}

export default translation()
