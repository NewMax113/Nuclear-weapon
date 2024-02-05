import React from 'react'
import Block from './block/Block'
import style from './main.module.scss'
import fon from '../images/fon2.jpg'

export const Main = () => {
  return (
    <div className={style.block_position}>
      <img src={fon} alt="" className={style.fon}/>
      <Block />
    </div>
  )
}
