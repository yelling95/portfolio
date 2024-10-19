import React, {useEffect, useMemo} from 'react'
import MonacoEditor, {useMonaco} from '@monaco-editor/react'
import Theme from './Theme.json'

function Editor(props) {
  const {lang, defaultValue} = props
  const monaco = useMonaco()

  useEffect(() => {
    if (!monaco) return
    monaco.editor.defineTheme('monokai', Theme)
    monaco.editor.setTheme('monokai')
  }, [monaco])

  return useMemo(() => {
    return (
      <MonacoEditor
        height="100%"
        theme="monokai"
        defaultLanguage={lang}
        defaultValue={defaultValue}
      />
    )
  }, [])
}

export default Editor
