import React from 'react'
import Folder from '../Folder/Folder'
import Editor from '../Editor/Editor'

import './WorkStyle.scss'

function WorkStyle(props) {
  return (
    <div className="work_style_container">
      <div className="folder_wrap">
        <Folder name="aaa">
          <Folder name="bbbb" />
          <Folder name="bbbb" />
          <Folder name="bbbb" />
          <Folder name="bbbb" />
        </Folder>
      </div>
      <div className="editor_wrap">
        <Editor />
      </div>
    </div>
  )
}

export default WorkStyle
