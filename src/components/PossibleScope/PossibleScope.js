import React, {useState, useMemo} from 'react'
import HtmlParser from 'react-html-parser'
import Scope from './Scope'

import './PossibleScope.scss'

function PossibleScope({scopes}) {
  const [focused, setFocused] = useState(null)

  const onChangeFocus = (f) => {
    setFocused(f)
  }

  const Contents = useMemo(() => {
    const focusedScope = scopes[focused]
    const title = focusedScope?.title
    const contents = focusedScope?.contents

    if (!focusedScope) {
      return ''
    }

    return (
      <div className="contents_wrap">
        <h3>{title}</h3>
        <div className="text">{HtmlParser(contents)}</div>
      </div>
    )
  }, [focused])

  return (
    <div className="possible_scope_container">
      <Scope focused={focused} onChangeFocus={onChangeFocus} />
      {Contents}
    </div>
  )
}
export default PossibleScope
