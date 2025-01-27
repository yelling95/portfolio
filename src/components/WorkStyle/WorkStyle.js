import React, {useCallback, useMemo, useState} from 'react'
import Folder from '../Folder/Folder'
import Editor from '../Editor/Editor'
import {map} from 'lodash-es'

import './WorkStyle.scss'

function WorkStyle({styles}) {
  const [selectFolder, setSelectFolder] = useState(null)

  const handleFolder = (folder) => {
    setSelectFolder(folder)
  }

  const getFolder = (folders, depth = 1) => {
    return map(folders, (folder, idx) =>
      folder.children ? (
        <Folder key={`folder-${depth}-${idx}`} name={folder.name}>
          {getFolder(folder.children, depth + 1)}
        </Folder>
      ) : (
        <Folder key={`folder-${depth}-${idx}`} name={folder.name} onClick={() => handleFolder(folder)}/>
      ),
    )
  }

  const handleContents = useCallback((value, e) => {
    console.log(value)
  }, [selectFolder])

  const FolderTree = useMemo(() => {
    return getFolder(styles)
  }, [styles])

  const ContentsEditor = useMemo(() => {
    return <Editor defaultValue={selectFolder?.contents} onChange={handleContents}/>
  }, [selectFolder])

  return (
    <div className="work_style_container">
      <div className="folder_wrap">{FolderTree}</div>
      <div className="editor_wrap">
        {ContentsEditor}
      </div>
    </div>
  )
}

export default WorkStyle
