import React from 'react'
import style from './ContentItem.module.scss'

function ContentItem({srcImg}) {
  return (
    <div className={style['content-item-box']}>
      <div className={style['content-item-title']}>Lorem ipsum dolor sit amet</div>
      <img src={srcImg} alt="" className={style['img-content']} />
      <div className={style['content-des']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</div>
    </div>
  )
}

export default ContentItem