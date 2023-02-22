import React from 'react'
import Footer from '../footer/Footer'
import ContentItem from './component/ContentItem'
import style from './Content.module.scss'

function Content() {
  return (
    <div className={style['content-wrapper']}>
      <div className={style['logo-box']}>
        <img src="./logoNCC 1.png" alt="" />
      </div>
      <div className={style['des-box']}>
        <p className={style['des-title']}>Lorem ipsum dolor sit asmet?</p>
        <p className={style['des-text']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</p>
      </div>
      <div className={style['content-box']}>
        <ContentItem srcImg={'/css-icon 1.png'} />
        <ContentItem srcImg={'/html-icon 1.png'} />
        <ContentItem srcImg={'/url-icon 1.png'} />
      </div>
    
    </div>
  )
}

export default Content