import React, {useRef, useState, useMemo} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import {map, find, join} from 'lodash-es'

import './SkillMountain.scss'

function Mountain(props) {
  const {name = '', hover, onClick = () => {}, onHover = () => {}} = props
  const ref = useRef()

  return (
    <mesh
      ref={ref}
      scale={4}
      onClick={(e) => onClick(name)}
      onPointerOver={(e) => (e.stopPropagation(), onHover(name, true))}
      onPointerOut={(e) => onHover(name, false)}
      {...props}>
      <coneGeometry args={[1, 1.5, 4]} />
      <meshStandardMaterial color={hover === name ? 'rgb(109,102,102)' : '#3a3a3a'} />
    </mesh>
  )
}

function SkillMountain({skills = () => {}}) {
  const [focus, setFocus] = useState(null)

  const handleClick = (id) => {
    setFocus(id)
  }

  const handleHover = (id, status) => {
    if (status) {
      setFocus(id)
    }
  }

  const FocusedSkill = useMemo(() => {
    const skill = find(skills, (s) => s.id === focus)

    if (!skill) return ''

    return (
      <div className="gradient">
        <label>{skill.id}</label>
        <div>{join(skill.items, ', ')}</div>
      </div>
    )
  }, [focus])

  return (
    <div className="skill_mountain_container">
      <div className="skill_wrap">{FocusedSkill}</div>
      <Canvas
        camera={{
          position: [12, 3, 12],
        }}>
        <ambientLight intensity={Math.PI} />
        <spotLight position={[0, 3, 3]} angle={0} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[4, 6, 3]} decay={0} intensity={Math.PI} />
        {skills.map((s) => (
          <Mountain
            key={`skill-${s.id}`}
            name={s.id}
            position={s.pos}
            hover={focus}
            onClick={handleClick}
            onHover={handleHover}
          />
        ))}
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default SkillMountain
