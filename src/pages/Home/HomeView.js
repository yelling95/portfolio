import React from 'react'
import i18next from '../../locale/i18n'
import dayjs from 'dayjs'
import {map} from 'lodash-es'
import {chapters} from './const'
import Me from '../../assets/images/me.jpeg'

import './Home.scss'

function Home(props) {
  return (
    <div className="home_container">
      <div className="header">
        <img src={Me} alt="My name is Veronica" />
        <label>
          <em>서예림</em> / Seo Yelim
        </label>
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
            <label>{`+82 10.4941.5796`}</label>
          </li>
        </ul>
      </div>
      <div className="contents">
        {map(chapters, (chp, idx) => (
          <div key={`chapter-${idx}`} className="chapter">
            <h1>Chapter{idx + 1}</h1>
            <label>{i18next.t(chp.subtitle)}</label>
            {chp.content}
          </div>
        ))}
      </div>
      <div className="footer">Copyright @{dayjs().year()} Veronica. All rights reserved.</div>
    </div>
  )
}
export default Home
