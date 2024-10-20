import React, {useState, useEffect, useMemo} from 'react'
import {useSpring, a, animated} from '@react-spring/web'
import {usePrevious} from '../../helpers'
import useMeasure from 'react-use-measure'
import className from 'classnames'

import './Folder.scss'

function MinusSquare(props) {
  return (
    <svg {...props} viewBox="64 -65 897 897">
      <g>
        <path
          d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 347h-442q-14 0 -25 10.5t-11 25.5v0q0 15 11 25.5t25 10.5h442q14 0 25 -10.5t11 -25.5v0
  q0 -15 -11 -25.5t-25 -10.5z"
        />
      </g>
    </svg>
  )
}

function PlusSquare(props) {
  return (
    <svg {...props} viewBox="64 -65 897 897">
      <g>
        <path
          d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184
  q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z"
        />
      </g>
    </svg>
  )
}

function CloseSquare(props) {
  return (
    <svg {...props} viewBox="64 -65 897 897">
      <g>
        <path
          d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155
  q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z"
        />
      </g>
    </svg>
  )
}

function FolderContents(props) {
  const {isOpen, previous, children} = props
  const [ref, {height: viewHeight}] = useMeasure()

  const {height, opacity, y} = useSpring({
    from: {height: 0, opacity: 0, y: 0},
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      y: isOpen ? 0 : 20,
    },
  })

  return (
    <animated.div
      className="folder_contents"
      style={{
        opacity,
        height: isOpen && previous === isOpen ? 'auto' : height,
      }}>
      <a.div ref={ref} style={{y}} children={children} />
    </animated.div>
  )
}

function Folder(props) {
  const {defaultOpen = false, name = '폴더', style, children, onClick} = props

  const [isOpen, setOpen] = useState(defaultOpen)
  const previous = usePrevious(isOpen)

  const FolderIcon = useMemo(() => {
    if (children) {
      return isOpen ? MinusSquare : PlusSquare
    }
    return CloseSquare
  }, [isOpen])

  const AnimatedContents = useMemo(() => {
    return <FolderContents isOpen={isOpen} previous={previous} children={children} />
  }, [isOpen])

  return (
    <div className="folder_container" onClick={onClick}>
      <FolderIcon
        className={className('folder_icon', isOpen && 'open')}
        onClick={() => setOpen(!isOpen)}
      />
      <span className="folder_name">{name}</span>
      {AnimatedContents}
    </div>
  )
}

export default Folder
