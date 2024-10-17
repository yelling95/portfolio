import React, {useEffect, useState, useRef, useCallback} from 'react'
import i18next from '../../locale/i18n'
import dayjs from 'dayjs'
import className from 'classnames'
import {map} from 'lodash-es'
import {chapters, names} from './const'

import Me from '../../assets/images/me.jpeg'

import './Home.scss'

function Home(props) {
  const nameInterval = useRef(null)

  const [nameIdx, setNameIdx] = useState(0)

  const nameIdxCallback = useCallback(() => {
    setNameIdx((idx) => {
      if (idx === names.length - 1) {
        return 0
      } else {
        return idx + 1
      }
    })
  }, [nameIdx])

  useEffect(() => {
    nameInterval.current = setInterval(nameIdxCallback, 1000 * 10)
    return () => {
      clearInterval(nameInterval)
      nameInterval.current = null
    }
  }, [])

  return (
    <div className="home_container">
      <div className="header">
        <img src={Me} alt="My name is Veronica" />
        <div className="names_wrap">
          {map(names, (name, idx) => (
            <label
              key={`name-${idx}`}
              className={className('names', nameIdx === idx ? 'on' : 'off')}>
              {name}
            </label>
          ))}
        </div>
        <ul>
          <li>
            <em>{i18next.t('이메일')}</em>
            <label>
              <a href="mailto:yelling95@daum.net" target="_blank">
                yelling95@daum.net
              </a>
            </label>
          </li>
          <li>
            <em>{i18next.t('생년월일')}</em>
            <label>1995. 04. 06</label>
          </li>
          <li>
            <em>{i18next.t('연락처')}</em>
            <label>{`+82)10.4941.5796`}</label>
          </li>
          <li>
            <em>{i18next.t('Github')}</em>
            <label>
              <a href="https://github.com/yelling95" target="_blank">
                https://github.com/yelling95
              </a>
            </label>
          </li>
          <li>
            <em>{i18next.t('Blog')}</em>
            <label>
              <a href="https://returnnew.tistory.com" target="_blank">
                https://returnnew.tistory.com
              </a>
            </label>
          </li>
        </ul>
      </div>
      <div className="contents">
        {map(chapters, (chp, idx) => (
          <div key={`chapter-${idx}`} className="chapter">
            <h1>Chapter{idx + 1}</h1>
            <label>{i18next.t(chp.subtitle)}</label>
            <div className={chp.layout}>{chp.content}</div>
          </div>
        ))}
      </div>
      <div className="footer">Copyright @{dayjs().year()} Veronica. All rights reserved.</div>
    </div>
  )
}
export default Home
