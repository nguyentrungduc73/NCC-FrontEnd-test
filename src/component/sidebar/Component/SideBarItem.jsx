import React from 'react'
import style from './SideBarItem.module.scss'

function SideBarItem({ className, text , mouse}) {
  let classNameComponent = className.map((item) => style[item])
  classNameComponent = classNameComponent.join(' ')
  return (
    <div className={classNameComponent}>
      {text}
      {mouse ? <span className={style['mouse-img']}>
        <img src="./mouse.png" alt="" />
      </span> : null}
    </div>
  )
}

export default SideBarItem