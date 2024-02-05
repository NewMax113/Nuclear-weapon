import React, { useState } from 'react'
import style from './block.module.scss'
import { Content } from './Content'

export default function Block() {
  let [positionFake, setPosition] = useState([-900, -1900, -2900, -3900, -4900, -5900, -6900, -7900, -8900, -9900 ])
  let [positionReal, setArr2] = useState([-900, -1900, -2900, -3900, -4900, -5900, -6900, -7900, -8900, -9900])
  let timeArray = []

  window.onscroll = function () {
    timeArray = []
    const scrollPosition = window.scrollY * 5.5;
    console.log(scrollPosition)
    positionFake.map((x, i) => {
      let timePosition = x + scrollPosition
      timeArray.push(timePosition)
    }
    )
    setArr2(timeArray)
    console.log(timeArray)
  }

  return (
    <div className={style.gallery}>
      <Content position={positionReal} />
    </div>
  )
}
