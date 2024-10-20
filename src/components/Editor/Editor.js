import React, {useEffect, useMemo} from 'react'
import MonacoEditor, {useMonaco} from '@monaco-editor/react'
import Theme from './Theme.json'
import {useDebounce} from '../../helpers'

function Editor(props) {
  const {lang, defaultValue = '왼쪽 메뉴를 클릭해주세요~~', onChange} = props
  const monaco = useMonaco()
  const {debounce, debounceClear} = useDebounce()

  const handleChange = (value, event) => {
    debounce(() => {
      onChange(value, event)
    }, 500)
  }

  useEffect(() => {
    if (!monaco) return
    monaco.editor.defineTheme('monokai', Theme)
    monaco.editor.setTheme('monokai')
  }, [monaco])

  useEffect(() => {
    return () => {
      debounceClear()
    }
  }, [])

  return useMemo(() => {
    return (
      <MonacoEditor
        height="100%"
        theme="monokai"
        defaultLanguage={lang}
        value={defaultValue}
        onChange={handleChange}
      />
    )
  }, [lang, defaultValue])
}

export default Editor
