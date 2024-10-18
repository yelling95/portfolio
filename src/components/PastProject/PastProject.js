import React from 'react'
import {map} from 'lodash-es'
import './PastProject.scss'

function PastProject(props) {
  const {year, position, title = '', desc = '', main = [], lang = [], tag = []} = props

  return (
    <div className="past_project_container">
      <label>
        {year} ∙ {position}{' '}
      </label>
      <h2>{title}</h2>
      <div className="desc">{desc}</div>
      <div className="main_wrap">
        {map(main, (m, idx) => (
          <div key={`main-${idx}`} className="main_item">
            {m}
          </div>
        ))}
      </div>
      <div className="lang_wrap">
        {map(lang, (l, idx) => (
          <label key={`lang-${idx}`}>{l}</label>
        ))}
      </div>
      <div className="tag_wrap">
        {map(tag, (t, idx) => (
          <label key={`tag-${idx}`}>#{t}</label>
        ))}
      </div>
    </div>
  )
}

export default PastProject
