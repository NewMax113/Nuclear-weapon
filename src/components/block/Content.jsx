import React from 'react'
import style from './block.module.scss'
import creator from '../../images/creator.png'
import creator2 from '../../images/creator2.jpg'
import bomb from '../../images/bomb.jpg'
import explosion from '../../images/explosion.jpg'
import bombVideo from '../../images/bombVideo.mp4'

export const Content = ({ position }) => {
    return (
        <>
            <div className={style.element} style={{ transform: `translateZ(${position[0]}px)`, opacity: `${position[0] > 250 ? 0 : 1}` }}>
                <h1>Отец советской атомной бомбы</h1>
            </div>
            <div className={`${style.element}`} style={{ transform: `translateZ(${position[1]}px)`, opacity: `${position[1] > 450 ? 0 : 1}` }}>
                <div className={`${style.element_right} ${style.text_right}`}>
                    <h2>Игорь Курчатов считается родоначальником советского атомного проекта. Он возглавлял его с самого старта, 28 сентября 1942 года, до собственной смерти.</h2>
                </div>
            </div>
            <div className={`${style.element}`} style={{ transform: `translateZ(${position[2]}px)`, opacity: `${position[2] > 250 ? 0 : 1}` }}>
                <img src={creator} className={`${style.element_left} ${style.element_square}`}></img>
            </div>
            <div className={`${style.element}`} style={{ transform: `translateZ(${position[3]}px)`, opacity: `${position[3] > 250 ? 0 : (position[3] < -2000 ? 0.4 : 1)}` }}>
                <img src={creator2} className={`${style.element_right} ${style.element_rectangleW}`}></img>
            </div>
            <div className={`${style.element}`} style={{ transform: `translateZ(${position[4]}px)`,opacity: `${position[4] > 250 ? 0 : (position[4] < -2000 ? 0.4 : 1)}` }}>
                
            </div>
            <div className={`${style.element}`} style={{ transform: `translateZ(${position[5]}px)`, opacity: `${position[5] > 250 ? 0 : (position[5] < -2000 ? 0.4 : 1)}` }}>
                <div className={`${style.element_right} ${style.text_right}`}>
                    <h3>Курчатов был советским физиком, который внес огромный вклад в развитие ядерной физики и создание атомной бомбы. Он был академиком АН СССР и получил множество наград за свою работу, включая Серебряную медаль Мира имени Жолио-Кюри.</h3>
                </div>
            </div>
            <div className={`${style.element}`} style={{ transform: `translateZ(${position[6]}px)`, opacity: `${position[6] > 250 ? 0 : (position[6] < -2000 ? 0.4 : 1)}` }}>
                <img src={bomb} className={`${style.element_left} ${style.element_rectangleW}`}></img>
            </div>
            <div className={`${style.element}`} style={{ transform: `translateZ(${position[7]}px)`, opacity: `${position[7] > 250 ? 0 : (position[7] < -2000 ? 0.4 : 1)}` }}>
                <img src={explosion} className={`${style.element_right} ${style.element_rectangleW}`}></img>
            </div>
            <div className={`${style.element}`} style={{ transform: `translateZ(${position[8]}px)`, opacity: `${position[8] > 250 ? 0 : (position[8] < -2000 ? 0.4 : 1)}` }}>
                <div className={`${style.element_left} ${style.text_left}`}>
                    <h3>РДС-1 была испытана 29 августа 1949 года на полигоне в Семипалатинской области Казахской ССCР.</h3>
                </div>
            </div>
            <div className={style.element} style={{ transform: `translateZ(${position[9]}px)`, opacity: `${position[9] > 250 ? 1 : (position[9] < -2000 ? 0.4 : 1)}` }}>
                <video src={bombVideo} autoPlay loop muted className={style.element_rectangleW}></video>
            </div>
        </>
    )
}
