import React, {useMemo} from 'react'
import Folder from '../Folder/Folder'
import Editor from '../Editor/Editor'
import {map} from 'lodash-es'

import './WorkStyle.scss'

function WorkStyle({styles}) {
  const getFolder = (folders, depth = 1) => {
    return map(folders, (folder, idx) =>
      folder.children ? (
        <Folder key={`folder-${depth}-${idx}`} name={folder.name}>
          {getFolder(folder.children, depth + 1)}
        </Folder>
      ) : (
        <Folder key={`folder-${depth}-${idx}`} name={folder.name} />
      ),
    )
  }

  const getContents = (contents) => {
    console.log(contents)
  }

  const FolderTree = useMemo(() => {
    return getFolder(styles)
  }, [styles])

  return (
    <div className="work_style_container">
      <div className="folder_wrap">{FolderTree}</div>
      <div className="editor_wrap">
        <Editor />
      </div>
    </div>
  )
}

export default WorkStyle
